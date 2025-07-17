---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
family: Antd 优化封装
---

# AntDrawer 抽屉

<Alert>Antd `v5` 之后，该组件可废弃，可以直接使用原生！</Alert>

相比 antd 自带，新增以下特性

- 支持命令式调用
- 修改默认配置为中文

## AntDrawer.show

命令式地展示一个弹窗，调用 `show` 时才创建节点，关闭时销毁

## 基本使用

<code src="./demos/content.tsx"></code>

## 自定义关闭

`content` 也支持接收一个回调函数，此时可以获取该弹窗的 `destroy` 方法，方便在合适的时机自动关闭

<!-- <code src="./demos/content-fn.tsx"></code> -->

## JSX 用法

<code src="./demos/basic.tsx"></code>

<API src="./demos/api.tsx"></API>

`AntDrawer.show` 的其它参数与 [Antd 组件 API](https://ant.design/components/drawer-cn/#API) 一致
