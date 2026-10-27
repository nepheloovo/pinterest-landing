#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
pages_remote="${1:-origin}"

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo '请先提交改动，再部署 GitHub Pages。' >&2
  exit 1
fi

git push "$pages_remote" main
git subtree push --prefix dist "$pages_remote" gh-pages
