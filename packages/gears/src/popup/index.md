---
nav:
  path: /gears
group:
  path: /components
  title: 组件
toc: content
family: 交互反馈
order: 2
---

# Popup 浮层

浮层，可以用来实现弹窗、气泡等，覆盖在当前页面上。

每个 popup 实际都是在 `<body>` 下新增一个 `div` 节点，popup 之间互不影响。

<Alert>Popup 是基于 `Portal` 实现的，在 Portal 的基础上封装了可选的遮罩层 mask、全局居中等功能。若无需这些功能、对浮层层级要有更灵活的控制，可基于无样式的 <a href="/gears/components/portal">Portal</a> 来实现。</Alert>

## 基本用法

popup 支持命令式和 jsx 两种方式。由于 popup 往往由事件触发，所以优先推荐命令式写法。

<code src="./demos/basic.tsx"></code>

上述例子也支持 jsx 写法

<code src="./demos/jsx.tsx"></code>

## 位置

<code src="./demos/position.tsx"></code>

## 控制打开、关闭浮层

命令式写法支持手动控制关闭浮层

<code src="./demos/close.tsx"></code>

## 只展示一个浮层

直接调用 `Popup.show` 打开的浮层，互不影响。那么多次调用 `Popup.show`，会打开多个浮层。对于内容相同的浮层来说，业务上我们希望始终只展示一个即可。

这种情况下，可以创建一个浮层实例，它会保证每次调用 show 方法时，自动关闭上一次的结果。从而实现该类型的浮层全局唯一。

<code src="./demos/unique/index.tsx"></code>

## API

<API src="./demos/api.tsx" hideTitle></API>
