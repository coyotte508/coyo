const mime = require("mime-types");
const S3SyncClient = require("s3-sync-client");

const client = new S3SyncClient({
  region: "fr-par",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  endpoint: "https://s3.fr-par.scw.cloud"
});

client
  .sync("dist", "s3://coyo.dev", {
    del: true,
    commandInput: {
      ContentType: syncCommandInput =>
        mime.lookup(syncCommandInput.Key) || "text/html"
    }
  })
  .then(
    () => process.exit(0),
    err => {
      console.error(err);
      process.exit(1);
    }
  );
