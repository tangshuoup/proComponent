/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 09:41:40
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-07 10:53:44
 */
import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

const pkgList = readdirSync(join(__dirname, 'packages')).filter((pkg) => pkg.charAt(0) !== '.');
const alias = pkgList.reduce((pre: any, pkg) => {
  pre[`@tangshuo/pro-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

const tailPkgList = pkgList.map((path) => `packages/${path}/src`);

export default defineConfig({
  alias,
  resolve: {
    docDirs: ['docs', ...tailPkgList],
  },
  themeConfig: {
    nav: {
      'zh-CN': [
        { title: '文档', link: '/docs' },
        { title: '组件', link: '/components' },
      ],
    },
    sidebar: {
      '/components': [
        {
          title: 'dem22o1',
          children: [
            {
              title: 'demo',
              link: '/components/demo',
            },
          ],
        },
      ],
    },
  },
});
