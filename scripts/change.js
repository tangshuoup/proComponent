/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-03-02 13:43:51
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-03-17 11:39:40
 */
const { yParser, chalk } = require("@umijs/utils");
const exec = require("./utils/exec");
const execa = require("execa");
const args = yParser(process.argv);

function logStep(name) {
  console.log(`${chalk.gray(">> Change:")} ${chalk.magenta.bold(name)}`);
}

async function changeWorkflow() {
  await exec("pnpm", ["changeset", "add"]);
  await exec("pnpm", ["changeset", "version"]);
  const gitDiff = execa.sync("git", ["diff", "--name-only", "packages/"]).stdout;
  const diffPackages = gitDiff.split("\n")?.map((i) => i.split("/")[1]);
  const packages = [...new Set(diffPackages)];
  if (packages?.length && !args.skipBuild) {
    logStep("build");
    const buildPackages = packages?.map((i) => `--filter ./packages/${i}`).join(" ");
    console.log("buildPackages", buildPackages);
    await exec("pnpm", [buildPackages, "build"]);
  }
}

async function change() {
  if (args.preChange) {
    const preType = args.preChange;
    logStep("preChange add");
    await exec("pnpm", ["changeset", `pre enter ${preType}`]);
    await changeWorkflow();
    await exec("pnpm", ["changeset", "pre exit"]);
  } else {
    logStep("change add");
    await changeWorkflow();
  }
}

change();
