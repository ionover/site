#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing dependencies..."
  npm install
fi

PORT="${PORT:-3000}"
HOST="${HOST:-localhost}"

echo "Starting local server at http://${HOST}:${PORT}"
exec npm run dev -- --hostname "$HOST" --port "$PORT"
