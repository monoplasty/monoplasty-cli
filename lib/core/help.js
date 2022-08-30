const { program } = require("commander");
const package = require("../../package.json");

const helpOptions = () => {
  // add your options
  program
    .option("-d, --dest <dest>", "a destination folder, e.g.: -d /src/components")
    .option("-f, --framework <framework>", "framework: react vue");

  program.addHelpText(
    "after",
    `
Examples:
  $ monoplasty help create
  $ monoplasty -h
  
More info:
  ${package.homepage}
`
  );
};

module.exports = helpOptions;
