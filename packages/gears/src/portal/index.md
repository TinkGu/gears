---
nav:
  path: /gears
group:
  path: /components
  title: 组件
toc: content
family: 交互反馈
order: 1
---

# Portal 外部节点渲染

Portal 每次会新建一个 dom 节点，将指定的 content 直接渲染到该节点上，并最终直接插入到 body 中。

由此构建的组件将脱离当前组件或页面存在，不受页面层级、父子组件树层级影响。适合构建浮层、弹窗、全局提示、回到首页等悬浮类组件，包括一切将组件内容渲染到顶层的场景。

<Alert type="info">
如果想要全局居中，可选 mask 遮罩的浮层效果，可直接使用 <a href="/gears/components/popup">Popup</a> 组件。
<br/>
进一步，如果想要统一视觉效果的弹窗组件，可直接使用 <a href="/gears/components/modal">Modal</a> 组件。
</Alert>

## 基本用法

Portal 支持命令式和 jsx（声明式）两种调用方式。由于 Portal 往往由事件触发，所以优先推荐命令式写法。

<code src="./demos/basic.tsx"></code>

上述例子也支持 jsx 写法

<code src="./demos/jsx.tsx"></code>

<br />

## 其他用法

其他用法可以参考 <a href="/gears/components/popup">Popup</a> 的用例。Portal 支持与其相似的 API。即 `show`、`create` 这两个方法。
<br />
包括如何控制打开/关闭 portal、如何约束相同内容的 portal 全局只存在一个等。

## 将任意组件转为 portal

通过 `withPortal` 这个高阶组件，可以将任意组件转为 Portal，支持 `Portal.create`、`Portal.show`。

比如，完全可以基于 Portal 实现一个 toast 组件。

<code src="./demos/with-portal/index.tsx"></code>

<API src="./index.tsx" />
