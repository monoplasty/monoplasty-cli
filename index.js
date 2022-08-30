#!/usr/bin/env node
const { program } = require("commander");
const package = require("./package.json");

const helpOptions = require("./lib/core/help");
const createCommand = require("./lib/core/create");

program
  .name(package.name)
  .usage("<command> [options...]")
  .version(`${package.name} ${package.version}`, "-v, --version");

createCommand();
helpOptions();
program.parse(process.argv);
