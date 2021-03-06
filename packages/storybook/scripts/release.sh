#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
SUBPACKAGE_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"

# Deploy to github pages twice:
# 1. version folder (e.g, '0.0.1')
# 2. 'latest' folder
SRC_DIR=$SUBPACKAGE_DIR/dist
CURR_VERSION=$(node -p "require('${SUBPACKAGE_DIR}/package.json').version")
NODE_DEBUG=gh-pages npx --no-install gh-pages --add \
  --dist $SRC_DIR \
  --dest ./$CURR_VERSION

NODE_DEBUG=gh-pages npx --no-install gh-pages \
  --dist $SRC_DIR \
  --dest ./latest

# Copy storybook config to gh-pages root
STORYBOOK_DIR=$SUBPACKAGE_DIR/.storybook
NODE_DEBUG=gh-pages npx --no-install gh-pages --add \
   --dist $STORYBOOK_DIR \
   --src storybook-config.json
