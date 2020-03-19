#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

npm run clean
npx --no-install lerna version --conventional-commits --yes
npm run build
npm run release
