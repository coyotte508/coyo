#!/usr/bin/env bash
#
# Manual deploy for coyo.dev
#
# Builds the static site and ships it to the server, where it is served by
# pm2 (as the `coyo` user) behind nginx on 127.0.0.1:3010.
#
# Usage: pnpm deploy
#
set -euo pipefail

REMOTE="${DEPLOY_HOST:-coyo}"
REMOTE_DIR="${DEPLOY_DIR:-/home/coyo/site}"
ARCHIVE="/tmp/coyo-build.$$.tgz"

echo "→ Building…"
pnpm build

echo "→ Packing build/…"
tar czf "$ARCHIVE" -C build .

echo "→ Uploading to $REMOTE…"
scp -q "$ARCHIVE" "$REMOTE:/tmp/coyo-build.tgz"

echo "→ Extracting into $REMOTE_DIR…"
# shellcheck disable=SC2087
ssh "$REMOTE" bash -s <<'EOF'
set -euo pipefail
TS=$(date +%Y%m%d-%H%M%S)
sudo -n cp -a /home/coyo/site "/home/coyo/site.bak.$TS"
sudo -n find /home/coyo/site -mindepth 1 -delete
sudo -n tar xzf /tmp/coyo-build.tgz -C /home/coyo/site
sudo -n chown -R coyo:coyo /home/coyo/site
rm -f /tmp/coyo-build.tgz
# keep only the 3 most recent backups
ls -dt /home/coyo/site.bak.* 2>/dev/null | tail -n +4 | xargs -r sudo -n rm -rf
echo "Deployed. Backup at /home/coyo/site.bak.$TS"
EOF

rm -f "$ARCHIVE"

echo "→ Verifying…"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://coyo.dev/)
if [ "$STATUS" = "200" ]; then
  echo "✓ https://coyo.dev/ is live (HTTP $STATUS)"
else
  echo "✗ https://coyo.dev/ returned HTTP $STATUS — check the server!"
  exit 1
fi
