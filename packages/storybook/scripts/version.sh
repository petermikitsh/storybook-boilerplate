#!/usr/bin/env bash

# Log Each command
set -x

# Bail on first error
set -e

BASE_DIR=$(dirname $0)
SUBPACKAGE_DIR="$(dirname $( cd "$BASE_DIR" ; pwd -P ))"

# Append version to storybook-config.json
CURR_VERSION=$(node -p "require('${SUBPACKAGE_DIR}/package.json').version")
STORYBOOK_PATH=${SUBPACKAGE_DIR}/.storybook/storybook-config.json
VERSIONS_JSONPATH="storybook.versions.availableVersions"
PAST_VERSIONS=$(node -p "require('$STORYBOOK_PATH').$VERSIONS_JSONPATH")
ALL_VERSIONS=$(node -p "[...${PAST_VERSIONS}, '$CURR_VERSION']")
npx --no-install json -I -f $STORYBOOK_PATH -e "this.$VERSIONS_JSONPATH=$ALL_VERSIONS"
