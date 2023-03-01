/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-01 18:10:22
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 11:15:59
 */
import { defineConfig } from "father";
export default defineConfig({
  cjs: {
    output: "lib",
    platform: "browser",
    transformer: "babel",
  },
  esm: {
    output: "es",
    platform: "browser",
    transformer: "babel",
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
  targets: {
    ie: 10,
  },
});
