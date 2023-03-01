---
title: TreeSelect
---

# 管理科室多选框 TreeSelect 

## 代码演示

<code src="./demos/index.tsx"  title="基础使用"></code>

## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| label | 标签 | `string` | `-` |
| hideLabel | 是否隐藏标签 | `boolean` | `false `|
| tree | 树下拉框列表 | `any[]` | `[]` |
| showSearch | 是否展示搜索框，个数较少的下拉框可以隐藏此项 | `boolean` | `true` |
| width | 选择框宽度 | `number` | `-` |
| dropProps | 下拉框相关属性 | `{ width?: number }` | `-` |
| className | 自定义类名 | `string`  | `-` |
| popupClassName | 自定义下拉菜单类名 | `string` | `-` |
| onSelect | 选择回调函数 | `(keys: (string \| number)[]) => void` | `-` |
| placeholder |占位文字 | `string` | `全部` |
| checkKeys | 传入的子节点code | `(string \| number)[]`  |`[]`|
| searchPlaceholder | 搜索框的占位提示信息 | `string` | `请输入名称` |

<!-- <API id='TreeSelect'></API> -->

## 指南

```tsx
/**
 * guide: true
 */
import React from 'react';
import Zmage from 'react-zmage';
import action from '../../assets/treeSelect_action.png';

export default () => {
  return (
    <div className="fs-guide">
      <p className="title">组件构成</p>
      <p className="desc">此处说明仅做逻辑参考</p>
      <div className="content">
        <Zmage src={action} style={{ width: 400 }}></Zmage>
      </div>
    </div>
  );
};
```
