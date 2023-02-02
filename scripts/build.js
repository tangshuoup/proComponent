/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2023-02-01 11:10:35
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-01 11:24:50
 */
const { readdirSync } = require('fs');
const { join } = require('path');
const exec = require('./exec');
const cwd = process.cwd();
(async ()=> {
  const pkgs = readdirSync(join(__dirname, '../packages')).filter((pkg) => pkg.charAt(0) !== '.');
  const buildList = pkgs.map((pkg) => {
  const pkgPath = join(cwd, 'packages', pkg);
    return exec('pnpm', ['run','build'], {
      cwd: pkgPath
    })
  })


  await Promise.all(buildList)
})()