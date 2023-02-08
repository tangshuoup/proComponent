/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-01 18:10:22
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-07 16:27:12
 */
import { defineConfig } from 'father';
export default defineConfig({
  cjs: {
    output: 'lib',
    platform: 'browser',
    transformer: 'babel',
  },
  esm: {
    output: 'es',
    platform: 'browser',
    transformer: 'babel',
  },
  targets: {
    ie: 10,
  },
});
