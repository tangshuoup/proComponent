# packages

[![NPM version](https://img.shields.io/npm/v/packages.svg?style=flat)](https://npmjs.org/package/packages)
[![NPM downloads](http://img.shields.io/npm/dm/packages.svg?style=flat)](https://npmjs.org/package/packages)

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

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```
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
  ## 如果再预发版本模式，先退出
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
