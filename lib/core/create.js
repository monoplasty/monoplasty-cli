const { program } = require("commander");

const { createProjectAction } = require("./actions");
const { repoUrl } = require("../config/repo");

const createCommands = () => {
  // 增加自己的options
  program
    .command("create")
    .usage("<project-name> [options...]")
    .description("create a new react or vue project powered by monoplasty-cli")
    .argument("<project-name>", "your project name")
    .option("-u, --url <url>", "set your template registry", repoUrl)
    .option("-pm, --packageManager <packageManager>", "the package manager to use when installing dependencies", "npm")
    .action(createProjectAction);
};

module.exports = createCommands;
