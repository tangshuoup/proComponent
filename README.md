<!--
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2023-02-13 14:20:27
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 10:21:37
-->
# packages

A react library developed with dumi

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# new packkge
$ pnpm bootstarp

# build all
$ pnpm build

# build Single package
$ cd package && pnpm build

```

## Build

## Release

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


## LICENSE

MIT
