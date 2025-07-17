---
nav:
  path: /gears-antd
group:
  path: /components
toc: content
family: Antd 优化封装
---

# AsyncSelect 异步选择器

Antd 原生的 Select 组件，options 必须提前设置，但往往 options 数据来自远端。
如果不能先于 select 点击之前获取数据，`defaultValue` 设置后就无法匹配展示对应的 `label`。

为此 AsyncSelect 做了以下优化

- 延迟请求：支持点击 select 组件时，才进行异步请求 options 数据。并缓存，二次点击无需重复请求。
- 展示默认值：支持设置 `defaultOptionValue` 和 `defaultOptionLabel`，即使没有设置 options，也能正常显示值。

## 基本用法

<code src="./demos/fetch/index.tsx"></code>

<API></API>
其他 API 可以参考 Select [文档](https://ant.design/components/select-cn/#API)
