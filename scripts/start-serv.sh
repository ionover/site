#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies..."
  npm install
fi

HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-3000}"

echo "Building production bundle..."
npm run build

if [ ! -d "out" ]; then
  echo "Build output directory 'out' was not found."
  exit 1
fi

echo "Starting static server for ./out at http://${HOST}:${PORT}"
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT" --bind "$HOST" --directory out
fi

exec npx --yes serve@latest out --listen "tcp://${HOST}:${PORT}"
