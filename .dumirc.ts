/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 09:41:40
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-01 15:25:08
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    nav: {
      'zh-CN': [{ title: '组件', link: '/components' }],
    },
    // sidebar: {
    //   '/components': [
    //     {
    //       title: '架构设计',
    //       children: [
    //         {
    //           title: 'Components - 组件设计',
    //           link: 'components',
    //         },
    //         {
    //           title: 'Schema - 通用配置',
    //           link: 'schema',
    //         },
    //       ],
    //     },
    //     {
    //       title: '布局',
    //       children: [
    //         {
    //           title: 'ProLayout - 高级布局',
    //           link: '/components/demo1',
    //         },
    //       ],
    //     },
    //   ],
    // },
  },
});
