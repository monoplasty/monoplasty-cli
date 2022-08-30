const { promisify } = require("util");
const chalk = require("chalk");
const path = require("path");

const download = promisify(require("download-git-repo"));

const log = require("../utils/log");

const { ejsCompile, writeFile, mkdirSync } = require("../utils/file");
const { execCommand } = require("../utils/terminal");

const createProjectAction = async (project, args) => {
  // clone
  const url = args.url.startsWith("https://") ? `direct:${args.url}` : args.url;
  log.log("monoplasty helps you create project, please wait a moment...");

  await download(url, project, { clone: true });

  // npm install
  const pm = args.packageManager.toLowerCase();
  // const pm = process.platform === "win32" ? `${_pm}.cmd` : _pm;
  const cmd = pm === "yarn" ? pm : `${pm} i`;
  await execCommand(cmd, { cwd: `./${project}` });

  log.log(`🎉  Successfully created project ${chalk.yellow(project)}.`);

  console.log(chalk.magenta("👉  enjoy it! \n"));
};

module.exports = {
  createProjectAction,
};
