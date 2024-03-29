/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-03-01 09:55:43
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-03-02 14:14:13
 */
const { yParser, chalk } = require("@umijs/utils");
const exec = require("./utils/exec");
const execa = require("execa");
const args = yParser(process.argv);

function printErrorAndExit(message) {
  console.error(chalk.red(message));
  process.exit(1);
}

function logStep(name) {
  console.log(`${chalk.gray(">> Release:")} ${chalk.magenta.bold(name)}`);
}

async function release() {
  if (!args.skipGitStatusCheck) {
    const gitStatus = execa.sync("git", ["status", "--porcelain"]).stdout;
    if (gitStatus.length) {
      printErrorAndExit(`Your git status is not clean. Aborting.`);
    }
  } else {
    logStep("git status check is skipped, since --skip-git-status-check is supplied");
  }
  await exec("pnpm", ["changeset", "publish"]);
  execa.sync("git", ["push", "--follow-tags"]);
}

release();
