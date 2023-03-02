/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-03-01 09:55:43
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-03-02 11:28:40
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

async function changeWorkflow() {
  await exec("pnpm", ["run", "change"]);
  await exec("pnpm", ["run", "change:version"]);
  await exec("pnpm", ["run", "change:publish"]);
  await exec("pnpm", ["run", "version"]);
}

async function release() {
  if (!args.skipGitStatusCheck) {
    const gitStatus = execa.sync("git", ["status", "--porcelain"]).stdout;
    console.log(gitStatus);
    if (gitStatus.length) {
      printErrorAndExit(`Your git status is not clean. Aborting.`);
    }
  } else {
    logStep("git status check is skipped, since --skip-git-status-check is supplied");
  }

  if (!args.skipBuild) {
    logStep("build");
    await exec("pnpm", ["run", "build"]);
  } else {
    logStep("build is skipped, since args.skipBuild is supplied");
  }
  // changeset

  if (args.skipChange) {
    logStep("change is skipped, since args.skipChange is supplied");
    return;
  }

  if (args.preChange) {
    const preType = args.preChange;
    logStep("preChange");
    await exec("pnpm", ["changeset", `pre enter ${preType}`]);
    await changeWorkflow();
    await exec("pnpm", ["changeset", "pre exit"]);
  } else {
    await changeWorkflow();
  }
}

release();
