---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
family: Antd 优化封装
---

# AntModal 弹窗

<Alert>Antd `v5` 之后，该组件可废弃，可以直接使用原生！</Alert>

相比 antd 自带，新增以下特性

- 支持命令式调用
- 修改默认配置为中文

## AntModal.show

命令式地展示一个弹窗，调用 `show` 时才创建节点，关闭时销毁

## 基本使用

<code src="./demos/content.tsx"></code>

## 自定义关闭

`content` 也支持接收一个回调函数，此时可以获取该弹窗的 `destroy` 方法，方便在合适的时机自动关闭

<code src="./demos/content-fn.tsx"></code>

## 单例弹窗 create

> 创建全局唯一的弹窗

假设我们存在一个「用户异常登录」的提示弹窗，可能通过 websocket 实时推送触发，多次推送则可能开启多个重复弹窗。
此时可以将该弹窗设计为单例弹窗，使其全局唯一。

`AntModal.create`

<code src="./demos/create.tsx"></code>

单例弹窗也可以用于防抖等场景。

## JSX 用法

<code src="./demos/basic.tsx"></code>

<API src="./demos/api.tsx"></API>

`AntModal.show` 的参数对象属性与 [Antd 组件 API](https://ant.design/components/modal-cn/#API) 一致
