---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
mobile: false
family: Antd 优化封装
---

# Confirm 确认弹窗

用于需要用户在对 confirm 里内容进行确认后再走之后逻辑的场景

区别于 `antd` 自带的 `modal.confirm`，将回调式 API 转为 Promise。用户点击「确定」、「取消」时 resolve promise。

确认返回 true，否则 false，可以通过最终的返回结果决定接下来的行为。

## 基本用法

<code src="./demos/index.tsx"></code>

其他参数可以参考 [文档 Modal.method()](https://ant.design/components/modal-cn/#API)
