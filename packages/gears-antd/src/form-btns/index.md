---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
family: Form 表单
---

# FormBtns 表单按钮

表单或页面底部的操作按钮，优化提交操作

- 自动 loading：根据传入的 onOk，表单按钮自动 resolve promise 展示 loading
- 若传入 form 实例，自动校验表单
- 二次验证用户取消、离开页面行为：当传入 onCancel 或者 autoBackOnCancel 时，展示『取消』按钮，进行二次确认

## 基本用法

<code src="./demos/loading/index.tsx"></code>

## 配合 antd-form 使用

<code src="./demos/with-form/index.tsx"></code>

## 取消按钮使用

<code src="./demos/cancel/index.tsx"></code>

<API></API>
