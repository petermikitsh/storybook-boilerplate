#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
SUBPACKAGE_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"

# Deploy to github pages
SRC_DIR=$SUBPACKAGE_DIR/dist
CURR_VERSION=$(node -p "require('${SUBPACKAGE_DIR}/package.json').version")
npx --no-install gh-pages --dist $SRC_DIR --dest ./$CURR_VERSION --no-push
