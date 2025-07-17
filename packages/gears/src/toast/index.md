---
nav:
  path: /gears
group:
  path: /components
  title: 组件
toc: content
family: 交互反馈
---

# Toast 提示

全局文字提示

- 支持纯文字或 jsx element
- 默认展示在页面中心，可以通过 `position='top'`，展示在页面上方
- 支持消息多种模式显示文案
  - 单条短消息显示，长度根据文案自适应
  - 单条消息自动换行显示
  - 单条消息单行显示，超出显示 `...`
  - 多条消息多行显示

## 基本用法

<code src="./demos/basic.tsx"></code>

## 简单写法

- 考虑到大部分情况下并不需要额外配置，提供简写 `toast.info(msg: string)`
- 错误提示 `toast.error(e: Error)`：集成 [getErrorMsg](https://tinkgu.github.io/xeno/#/api/modules/core#geterrormsg)，传入 error 对象即可展示错误信息

<code src="./demos/quick.tsx"></code>

<API />
