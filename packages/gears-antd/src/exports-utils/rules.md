---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
mobile: false
family: Form 表单
---

# Rules 校验规则

提供一些常见的表单校验规则

## 必填

<code src="./demos/rules/required.tsx"></code>

<Alert>如果想要过滤空字符串，建议使用 `<Form.Item normalize={trim}>` </Alert>

## 数字大小

<code src="./demos/rules/number.tsx"></code>

<Alert>建议直接使用 `InputNumber` 组件</Alert>

## 文本长度

<code src="./demos/rules/txt-len.tsx"></code>

## URL 链接

- 支持 https 校验
- 支持域名校验

<code src="./demos/rules/url.tsx"></code>

## 过滤非法字符

<code src="./demos/rules/code.tsx"></code>
