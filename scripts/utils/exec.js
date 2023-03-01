/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-03-01 09:55:19
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-03-01 09:55:30
 */
const { spawn } = require("child_process");

module.exports = function exec(command, args, opts) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      shell: true,
      stdio: "inherit",
      env: process.env,
      ...opts,
    });
    child.once("error", (err) => {
      console.log(err);
      reject(err);
    });
    child.once("close", (code) => {
      if (code === 1) {
        process.exit(1);
      } else {
        resolve();
      }
    });
  });
};
