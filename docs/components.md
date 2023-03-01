---
title: 简介
order: 0
---

# 组件设计

@firesoon/pro-components 是基于 @firesoon/ant-ui 而开发的业务组件，提供了更高级别的抽象支持，开箱即用。

- @firesoon/pro-layout 布局类业务组件集合
    Header - 页头
- @firesoon/pro-form 表单类业务组件集合
    TreeSelect - 管理科室多选框

# 脚手架概览

```bash
- .changeset         * changset init 生成的初始化配置
- .dumi              * dumi 的相关配置，主要是主题等
- .husky             * 代码提交控制husky目录
- docs               * 存放公用的文档
- packages           * 我们维护的包
- scripts            * 开发或者部署所用的脚本
- tests              * 编写测试用例的地方
- .prettierrc.js     * prettier 的相关配置
- .eslintrc.js       * eslint 的配置
- .fatherrcbase.ts   * 编译脚手架的配置
- .dumirc.ts         * dumi 的核心配置
- jest.config.js     * 测试环境的配置
- package.json       * 项目的配置
- tsconfig.json      * typescript 的配置
- pnpm-lock.yaml     * 依赖 lock 文件
- pnpm-workspace.yaml* pnpm-wokspace配置文件
- README.md          * 展示在 github 主页的代码

```

# 开发工作流
### Development

```bash
# install dependencies
$ pnpm install

# Single package install
$ pnpm add xx --filter<package_name>
$ cd <package_name> && pnpm add xx

# develop library by docs demo
$ pnpm start

# new package
$ pnpm bootstarp

```

### Build

```bash
# build all pacakge
$ pnpm build

# build Single package
$ cd <package_name> && pnpm build
$ pnpm --filter <package_name> build

# build docs 
$ pnpm docs:build

```

### Release

```bash
# preRelease 预发版本,
  ## 进入发布beta版本模式
  $ pnpm prechange 
  ## 选择修改的包，添加修改信息
  $ pnpm change  
  ## 修改包版本
  $ pnpm change:version
  ## publish
  $ pnpm change:publish
# 正常模式
  ## 如果在预发版本模式，先退出
  $ pnpm prechange:exit
  ## 选择修改的包，添加修改信息
  $ pnpm change  
  ## 修改包版本
  $ pnpm change:version
  ## publish
  $ pnpm change:publish


```