#!/usr/bin/env node

const path = require("path");
const storybook = require("@storybook/react/standalone");

storybook({
  mode: "static",
  configDir: path.resolve(__dirname, "../.storybook"),
  outputDir: path.resolve(__dirname, "../dist"),
  ci: true,
  quiet: true
});
