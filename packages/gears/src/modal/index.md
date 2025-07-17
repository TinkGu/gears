---
nav:
  path: /gears
group:
  path: /components
  title: 组件
toc: content
family: 交互反馈
---

# Modal 对话框

交互式对话框，打开一个浮层，并允许用户对内容进行「确定」、「取消」处理。<br/>
一个弹窗可能由标题 `title`、弹窗主体 `content`、操作按钮三部分组成。<br/>
当需要一个简洁的确认框时，可以使用命令式 `Modal.confirm()` 。

Modal 预设以下特性

- 默认在页面中全局居中
- 预设 `confirm`、`info`、`warning` 等多种类型
- 确认按钮的 `onOk` 事件若为 promise，自动处理 loading 状态
- 当 modal 设为 `disabled` 时，禁用确认按钮

<Alert>如果 Modal 不符合你的自定义需求，需要自定义整个弹窗的位置、交互行为，可以使用 <a href="/gears/components/popup">Popup</a> 组件</Alert>

## 基本使用

Modal 同时支持命令式和 jsx 两种风格的接口。我们推荐用命令式接口 `Modal.show`， 通过 `type` 可以指定以下几种交互类型：

- `undefined` 未设置 `type` 时，默认不展示任何按钮，可以通过自定义 `okText` 和 `cancelText` 来分别显隐按钮
- `info` 通知，只有「确定」按钮 （默认）
- `confirm` 需要用户选择，同时有「确定」、「取消」按钮

由于 `type: confirm` 比较常用，可通过简写 `Modal.confirm()` 来调用。

<code src="./demos/basic.tsx"></code>

## 自定义内容

<code src="./demos/modal-content.tsx"></code>

## 异步写法

为了避免 `onOk` 的回调中编写太多逻辑，代码嵌套。可以通过 `confirm` 方法，将 Modal 转为异步函数来调用。

<code src="./demos/async.tsx"></code>

## 自动 loading

如果 `onOk` 回调返回的是一个 promise，弹窗确认按钮会自动处理 loading 状态。

<code src="./demos/loading.tsx"></code>

## 半屏弹窗

自适应高度半屏弹窗
<code src="./demos/half-screen-modal.tsx"></code>

## jsx 弹窗

出于性能考虑，一般建议使用命令式弹窗。JSX 弹窗适用于在弹窗显示过程中，需要动态修改标题、按钮等内容时。

<code src="./demos/jsx.tsx"></code>

## 高阶用法

Modal 支持 <a href="/gears/components/popup">Popup</a> 组件</Alert> 的所有特性

## API

<API src="./demos/api.tsx" hideTitle></API>
