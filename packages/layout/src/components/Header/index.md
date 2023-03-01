---
title: Header
---

# 页头 Header

分为应用平台页头和业务产品页头

## 代码演示

<code src="./demos/index.tsx"  title="医院数据综合应用平台页头" description="通过 pswOptions 配置修改密码相关设置，通过 pswOptions.validateMode 可以设置新密码校验规则的模式，内置了 'simple' 和 'complex' 模式，也可以自定义校验规则"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| logo | logo图片 | `string` | - |
| hosName | 院区名 | `string` | - |
| user | 用户信息，包括 name(必需) 和 id ， 注： 1.5以后可以不传，只穿userInfo 即可 | `User` | - |
| userInfo | 用户信息 | `UserInfo` | - |
| roles | 用户角色列表 | `Role[]` | - |
| roleKey | 用户当前选择的角色 | `ReactText` | - |
| hideRoles | 隐藏用户角色切换 | `boolean`  | false |
| version | 应用版本号 | `string` | - |
| backText | 返回应用平台页面 | `string` | 返回应用平台页面 |
| changeText |返回应用平台切换院区 | `string` | 返回应用平台切换院区 |
| dropMenu | 下拉菜单 | `ReactNode`  | - |
| onBackTo | 返回应用平台 | `() => void` | - |
| onLogout | 退出登录 | `() => void` | - |
| onChangeRole | 切换身份 | `(value: any, option: React.ReactElement<any> \| React.ReactElement<any>[]) => void` | - |
| onChangePsw | 修改密码 | `() => void` | - |
| onShowVersion | 显示系统更新说明等, 不传则版本信息为文本，没有交互 | `() => void` | - |
| onChangeHos | 切换院区 | `(value: number) => void` | - |
| isSys | 是否是应用平台的页头，默认为false | `boolean` | false |
| isMoreHosptial | 是否多机构 | `boolean` | false |
| isMultiAgency | 受控属性，是否折叠 | `boolean` | false |
| hideMultiCampusAll | 是否隐藏多院区的全部选项 | `boolean` | false |
| showUserInfo | 是否显示用户信息下拉，默认为true | `boolean` | - |
| showChangePsw | 是否显示用户修改密码下拉，默认为true | `boolean` | true |
| pswOptions | 修改密码modal的相关配置 | `PswOptions` | - |
| addedMenus | 自定义菜单列表 | `Menu[]` | - |
| hospitalId | 选中院区code, 全部为-1 | `number` | -1 |
| hospitalInfoVos | 院区下拉列表	 | `hospitalItem[]	` | - |
| messageBox | 消息盒子 | `React.ReactElement<any>` | - |




