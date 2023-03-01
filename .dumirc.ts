/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 09:41:40
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-28 14:12:42
 */
import { defineConfig } from "dumi";
import { readdirSync } from "fs";
import { join } from "path";

const pkgList = readdirSync(join(__dirname, "packages")).filter((pkg) => pkg.charAt(0) !== ".");
const alias = pkgList.reduce((pre: any, pkg) => {
  pre[`@firesoon/pro-${pkg}`] = join(__dirname, "packages", pkg, "src");
  return {
    ...pre,
  };
}, {});

const tailPkgList = pkgList.map((path) => `packages/${path}/src`);

export default defineConfig({
  alias,
  // apiParser: {},
  resolve: {
    docDirs: ["docs", ...tailPkgList],
    // entryFile: 'packages/components/src/index.tsx',
  },
  lessLoader: {
    math: "always",
    strictMath: false,
  },
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "@firesoon/antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
  themeConfig: {
    sidebar: {
      "/components": [
        {
          title: "简介",
          link: "components",
          children: [],
        },
        {
          title: "布局",
          children: [
            {
              title: "页头 Header",
              link: "/components/Header",
            },
          ],
        },
        {
          title: "数据录入",
          children: [
            {
              title: "管理科室多选框 TreeSelect",
              link: "/components/tree-select",
            },
          ],
        },
      ],
    },
  },
});
