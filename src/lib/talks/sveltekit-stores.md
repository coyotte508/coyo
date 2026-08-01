> Edit 19 January 2022: Recently SvelteKit introduced the ability to get `stuff` from `getStores().page`. The article has not been updated to reflect this, but it may simplify the code.

Svelte is really nice with stores. You can have a separate folder like this with named global stores:

```ts
// stores/user.ts
import { writable } from "svelte/store";

export const user = writable<User | null>(null);
```

```ts
// stores/products.ts
import { writable, get as $ } from "svelte/store";
import { user } from "../user";

export const products = writable<Product[] | null>(null);

// Remove products on log out
user.subscribe(($user) => {
	if (!$user) {
		products.set(null);
	}
});

export async function loadProducts() {
	// Simple caching mechanism
	if (!$(products) && $(user)) {
		const response = await fetch("/api/products");
		products.set(await response.json());
	}
}
```

And then you can directly import the stores in your components, no hassle!

On SvelteKit, though it doesn't work. Or rather, it works, but the stores are shared among all users:

> Mutating any shared state on the server will affect all clients, not just the current one.

So... how do we get around this?

## Step 1: Session as the key

It already exists! Sort of...

It's the session, available through `input.session` in a `load(input)` function, or through `getStores().session` within a component.

But the session can only contain POJO data, or JSON with Maps and Sets. It's the limits imposed by [devalue](https://github.com/Rich-Harris/devalue) which is used by SvelteKit.

So, no dice for putting the store inside the session. But there's a nifty feature of javascript called a [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap).

So you can do something like this:

```ts
const stores = new WeakMap<Session, ...>();
```

And to get the stores associated with the current user, you can do either `stores.get(input.session)` when in a `load` function or `stores.get($session)` when in a component.

## Step 2: Adding a bit of tooling

Wouldn't a standardized way of accessing the stores be great?

First, we need an easy way to get the current session, no matter where we are.

It's easy when in a component: we can just call `getStores()`. Inside a `load` function, there's no built-in way, however.

So, we're going to need a constraint: create a `useLoad` function, that is called during `load`:

```
export function load(input) {
  useLoad(input, func1, func2, ...);
}
```

It will execute `func1`, `func2` and so on with the session in `input.session` as the context.

And then we will create `useSession()` that can get the current session from anywhere.

```ts
// useLoad.ts
import type { LoadInput } from "@sveltejs/kit";

type SessionData = { stores: Map<unknown, unknown>; fetch: typeof fetch };

export const loadSession = writable<Session | null>(null);
export const sessionData = new WeakMap<Session, SessionData>();

// Typescript magic
type ReturnTypes<T> = T extends [...infer U, infer A]
	? A extends (...args: unknown[]) => unknown
		? ReturnType<A> & ReturnTypes<U>
		: void
	: void;

export function useLoad<T extends Array<(...args: unknown[]) => unknown>>(input: LoadInput, ...fns: T): ReturnTypes<T> {
	if (!sessionData.has(input.session)) {
		sessionData.set(input.session, { stores: new Map(), fetch: input.fetch });
	}
	loadSession.set(input.session);

	try {
		return Object.assign({}, ...fns.map((fn) => fn()));
	} finally {
		loadSession.set(null);
	}
}
```

```ts
// useSession.ts
import { getStores } from "$app/stores";
import { get as $, writable } from "svelte/store";
import { loadSession, sessionData } from "../useLoad";

export function useSession(): { session: Session; data: SessionData } {
	const session = $(loadSession) ?? ($(getStores().session) as Session);

	const data = sessionData.get(session);

	if (!data) {
		throw new Error("Call useLoad before calls to useSession");
	}

	return {
		session,
		data,
	};
}
```

Now we have:

- `useLoad(input, ...)` that needs to be called inside the load function.
- `useSession()` which can get the current session, even within the load function.

## Step 3: defineStore()

It's inspired by the excellent Vue libary [pinia](https://pinia.esm.dev/introduction.html)

Svelte has a wonderfully simple way of creating global stores, unfortunately in the SSR context we're going to need to recreate a `defineStore` function.

It's going to look like this:

```ts
// useUser.ts
import { writable } from "svelte/store";
import { defineStore } from "./defineStore";

const useUser = defineStore(() => {
	const user = writable<User | null>(null);

	return {
		user,
	};
});
```

```ts
// useProducts.ts
import { writable } from "svelte/store";
import { defineStore } from "./defineStore";
import { useUser } from "./useUser";

const useProducts = defineStore(() => {
  const { user } = useUser();
  const products = writable<Products|null>(null);

  user.subscribe($user => {
    if (!$user) {
      products.set(null);
    }
  }

  return {
    products
  };
});
```

We can see that the products store can even look up the `user` store!

How does this work? `defineStore` takes a function as a parameter. The first time the store is needed for the current session, the function is executed. The subsequent times, the cached result is returned:

```ts
import { useSession } from "./useSession";

export function defineStore<T>(fn: () => T): () => T {
	return () => {
		const { data } = useSession();

		if (!data.stores!.has(fn)) {
			data.stores!.set(fn, fn());
		}

		return data.stores!.get(fn) as T;
	};
}
```

Easy peasy.

## Step 4: Using SvelteKit's `fetch`

One particularity about SvelteKit is that it provides a `fetch` function that should be used within `load`. The reason is so that when the same calls are executed both serverside & clientside, the cached value can be used clientside instead of repeating the call.

Maybe you noticed, but in the above `useLoad`, we stored `input.fetch` in `sessionData`.

To access it, we can create a `useFetch` function:

```ts
export const useFetch = () => {
	const { data } = useSession();
	return { fetch: data.fetch };
};
```

And we can now improve our `useProducts` function to add `loadProducts`:

```ts
// useProducts.ts
import { browser } from "$app/env";
import { writable, get as $ } from "svelte/store";
import { defineStore } from "./defineStore";
import { useUser } from "./useUser";

const useProducts = defineStore(() => {
  const { user } = useUser();
  const { fetch } = useFetch();
  const products = writable<Products|null>(null);

  user.subscribe($user => {
    if (!$user) {
      products.set(null);
    }
  }

  const loadProducts = async () => {
    if (!$(products) && $(user)) {
      const response = await fetch('/api/products');
      products.set(await response.json());
    }
  }

  return {
    products,
    loadProducts
  };
});
```

## Step 5: Using our `useXxx` functions in the code

Some of you maybe wondering why the `useXxx` naming. Are we doing React? 😅

I find that this naming convention has been adopted for functions that need to be called in a particular context - the immediate context for the component.

It's used by another excellent Vue library, [vueuse](https://vueuse.org/).

Here we decide it means a function that can be called either:

- In the immediate context of a component
- Through `useLoad`

So, let's say we wanted to load the products inside a `load` function. Here is what it would look like:

```ts
import { get as storeGet } from "svelte/store";
import { useLoad } from "$lib/use/useLoad";
import { useProduct } from "$lib/use/useProduct";

export async function load(input: LoadInput) {
  const {products, loadProducts} = useLoad(input, useProducts);

  await loadProducts();

  return {
    products: storeGet(products);
  }
}
```

And here is what it would look like inside a component:

```vue
<script lang="ts">
import { useProduct } from "$lib/use/useProduct";

const { products, loadProducts } = useProducts();
const { user } = useUser();

$: (loadProducts(), [$user]); // reloads products each time user changes
</script>

{#each ($products || []) as product}
<Product {product} />
{/each}
```

So that's it! We now have a uniform way of accessing per-user global stores, whether we're serverside or clientside, and whether we're in a `load` function or inside a component.

As a bonus, we also have a uniform way of accessing the correct `fetch` function ;)
