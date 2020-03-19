#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
MONOREPO_ROOT_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"

npm run clean
npx --no-install lerna version --conventional-commits --yes --no-git-tag-version
npm run build
npm run release
git add .
SEMVER=$(node -p "require('${MONOREPO_ROOT_DIR}/lerna.json').version")
VERSION="v$SEMVER"
git commit -m $VERSION
git tag $VERSION
git push origin master
git push origin $VERSION
