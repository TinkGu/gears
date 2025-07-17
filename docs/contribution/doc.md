---
order: 2
---

# 如何写文档

在比较了几款工具后，文档系统我们选择了 `dumi`。

<details>
  <summary><a>why dumi</a></summary>
  <embed src="./__inner/why-dumi.md"></embed>
</details>

## 组件文档

好的组件文档，应该是

- 至少提供一种最简单、最佳的调用方式，开发者可以一键复制使用
- 如果你提供了许多 `prop` 配置项，那最好写一两个例子描述其使用场景，至少通过注释说明清楚
- 当前未考虑提供组件的 UI 测试方案，可以尝试编写若干例子代替测试

更多配置还是查阅[官方文档](https://d.umijs.org/zh-CN/guide/basic#%E5%86%99%E7%BB%84%E4%BB%B6-demo)

### 快速编写

一个最简单的文档可以这样配置，可以理解为在写 markdown 文件。

[点击查看这个例子的渲染结果](/gears/popup)

```markdown
---
nav:
  path: /gears
group:
  path: /components
toc: content
family: 交互反馈
---

# Popup

## 基本用法

<code src="./demos/basic.tsx"></code>

<API></API>
```

- `nav`
  用于表示该文档最终入口展示在哪个标题下，此处表示设置在 `gears` 目录下，可以通过网站上的「组件库」入口进入
- `toc`
  是否生成大纲
- `family`
  将文档放到对应的分类下
- `<code>`
  引用一个例子文件，该文件返回一个 react 函数，会直接渲染到页面中。
- `<API>`
  默认读取同级目录下 `index.tsx` export 组件的 interface 信息，会自动根据你的 interface 注释、默认值生成对应的表格。

## demo 文档

文档中的 demo，本质也是一个 `.tsx` 文件，通过文件头部的注释来控制在文档内的渲染模式。

```ts
/**
 * iframe: true
 * defaultShowCode: true
 * mobile: true
 */
import React, { useEffect } from 'react';
import { Popup } from '@tinks/gears';

export default () => {
  useEffect(() => {
    Popup.show({
      mask: false,
      content: () => <div>这是一个浮层，默认是全局居中的哦</div>,
    });
  }, []);
  return <div></div>;
};
```

- `title` 代码块标题
- `desc` 代码块简介，可以用 `Markdown` 来编写
- `defaultShowCode` 默认是否展开代码块
- `iframe` 是否以 iframe 模式加载代码块，默认不需要，除非会影响全局样式、占据全局视口
- `mobile` 模式，文档例子代码会运行在手机线框中。默认 iframe 模式。

## 源代码注释

dumi 依靠类型解析工具 `react-docgen-typescript`，可以自动生成 API 文档表格。即 `<API>` 组件。

[详细描述可看官方文档](https://d.umijs.org/zh-CN/guide/advanced#%E7%BB%84%E4%BB%B6-api-%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90)

这要求你需要这样编写代码注释。

```ts
export interface PopupProps {
  /** 关闭浮层回调 */
  onDestroy?: () => void;
  /**
   * 浮层包裹的主体内容，仅在以 JSX 形式调用 Popup 时有效
   * @type `React.ReactNode | ((onDestroy: () => void) => React.ReactNode)`
   */
  children?: React.ReactNode | ((onDestroy: () => void) => React.ReactNode);
  /**
   * 是否展示背景蒙层
   * @default true
   */
  mask?: boolean;
  style?: React.CSSProperties | undefined;
}
```

不幸的是，该插件无法读取组件的默认值，需要在 interface 上手动配置 `@default`。

你可能注意到使用了 `@type`，这是因为部分场景下，该插件解析复杂类型有问题，会返回一个巨长且不可读的类型，可能强制重写类型会比较好。

## 常规文档

跟写 md 是一样的，`dumi` 额外提供了一些功能，帮助我们确定排版和导航位置，[详细参数可以查看](https://d.umijs.org/zh-CN/config/frontmatter)

## CHANGELOG

即更新日志，该文档不是由 dumi 生成的，而是基于历史提交的 commit 生成的。
