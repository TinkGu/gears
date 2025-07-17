---
order: 1
nav:
  title: 开发
  path: /contribution
  order: 99 # 优先级高，保持在菜单末尾
toc: content
---

# 项目架构

- 使用 `lerna` + `pnpm workspace` 形成 monorepo，单一仓库，多个子项目，统一管理依赖，滚动升级
- [dumi](https://d.umijs.org/zh-CN) 编写文档、生成文档站，也可以作为组件预览、开发时的 playground 使用
- `rollup` + `tsc` 编译 cjs、es 模块

## monorepo

monorepo 本身没有依赖管理、版本管理的概念，原来的意思就是把所有项目都放在一个 git repo 中，这样自然就能互相引用、同步共享了。比如 Google 的核心代码就这样管理的，许多服务都放在一起，整个 repo 代码甚至有几十万行。

单纯只是把所有代码放在一起，monorepo 就解决了公共依赖、版本同步的问题，工程上显得更加简单。
但简单也不意味着就更先进，具体情况具体分析，到底是 monorepo 还是 multirepo，往往和配套的发布系统、应用服务的对接模式有关。

### lerna

lerna 项目的结构一般为这样

```bash
.
├── lerna.json           # 描述文件
├── package.json         # 公共依赖描述
└── packages             # 所有子项目
    ├── pa
    │   ├── package.json # 子包描述
    │   └── src
    └── pb
        ├── package.json # 子包描述
        └── src
```

作为开箱即用的前端 monorepo 方案， lerna 到底提供了哪些便利呢？🤔

- **版本管理、滚动升级**

假设我们现在有 `a`, `a-pro` 两个包，后者依赖前者，都需要对外发布。一旦 `a` 升级，`a-pro` 需要对应更新依赖，滚动升级。

不使用 lerna 的话，我们要手动去到对应的 repo 中更新依赖升级。在 lerna 中，则可以在升级 `a` 的时候自动嗅探，也升级 `a-pro`。
甚至自动同步版本，任何一个包有变更，全部都升级版本号，并且版本号相同。

- **依赖提升**

lerna 负责管理一个项目下的多个 packages，如果他们之间有共享的依赖，比如都依赖 react，可以通过 `lerna bootstrap --hoist` 将相同版本的公共依赖提升到根目录下的 node_modules 中。node 在搜索模块时，会通过向上找包或软链接的形式找到被提升的依赖。

- **自动生成 changelog**

lerna 集成了一些 commit-message 工具，在执行 `lerna version` 时通过规范化的 commit 信息，自动生成 changelog 文档。

### Pnpm Workspace

lerna 本身自带了依赖管理，也可以做到公共依赖共享。使用 `pnpm workspaces` 的原因是，相对 lerna，其包管理更精细，安装更快、整体安装的包更少。

另外一个显著的特点是，他允许你在项目根目录下通过 `pnpm --filter pkg-name add 包名` 命令直接针对某个子项目安装、移除依赖，lerna 必须切换到子项目中比较麻烦。

## 打包编译

`gears` 使用 `rollup` 来进行打包，`tsc` 做类型生成。支持输出 cjs 和 es 模块。

由于目前我们暂时不考虑提供 cdn 版本，所以无需以 script 标签形式提供，也就无需编译 umd 版本。

### 按需加载

按需加载即在业务项目中引用组件库时，不会一次性引入全部组件，打包时只会打入被引用的那部分组件。

目前主流的组件库，或多或少都受到了 `ant-design` 的影响。

<details>
  <summary><a>antd 的按需加载方案</a></summary>
  <embed src="./__inner/antd-import.md"></embed>
</details>

2021 年了，不考虑老项目的兼容问题，业务项目中，按需加载依靠 `Tree-Shaking` 完全可以做到。

业务侧配置 babel 和 webpack，即可引导读取组件库的 es 模块，Tree-Shaking 掉不需要的 JS 代码。

而 css 代码，我们通过 `rollup-plugin-postcss`，实现将 css 文件 inline 成 js 文件，引用组件时，直接以 `<style>` 标签的形式注入。这样一来，css 文件也就变成了 js 文件，原则上也可以享受 tree-shaking。

所以 gears 在接入时无需安装其他插件来辅助按需加载。
