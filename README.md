# @tinks/gears

前端组件库

[🧙🏻 在线文档](https://tinkgu.github.io/gears/)

- `@tinks/gears` 通用组件，适用于 pc、移动端场景
- `@tinks/gears-antd` 基于 antd 的封装，适用于后台
- `@tinks/gears-styles` 统一 CSS 基础样式

---

👇 太长不看可跳过的部分，为您列出了详细文档的链接

- [项目架构](./contribution/overview)
- [贡献代码](./contribution/dev-flow)

# 🔨 安装

推荐使用 yarn/pnpm 来安装，注意，需要提前依赖

```bash
yarn add @tinks/gears
```

如果是后台项目

```bash
yarn add @tinks/gears @tinks/gears-antd
```

# 🚀 快速开始

- 安装依赖：`pnpm i`
- 修改后进行编译：`pnpm run build`
- 发布：`pnpm run release`

> 从 yarn 迁移过来？

请先 cd 到项目目录下，执行以下命令

```bash
rm -rf yarn.lock node_modules packages/gears/node_modules packages/gears-antd/node_modules
```

# 💼 如何安装依赖

本项目作为 monorepo，使用 `pnpm workspace` 来管理依赖，依赖安装需要遵循以下几个命令。

- 为子项目单独安装依赖

比如给 `gears-antd` 安装 `antd`

```bash
pnpm --filter @tinks/gears-antd add 包名
```

> 此处借助的是 pnpm 的 [filter](https://pnpm.io/zh/6.x/filtering) 功能

- 为项目安装全局依赖

这种依赖是项目的 dev 依赖，一般用于构建等场景

```bash
pnpm add 包名 -WD
```

# 如何本地调试

- `pnpm start` 开启文档模式，也可以作为 playground 调试
- `pnpm link` 和 npm link 一样，提供将本地代码在未发布的情况下，直接 link 到特定业务项目中调试的能力。注意需要先 build 再 link。pnpm link 详细用法请查阅官方文档 [pnpm link](https://pnpm.io/zh/6.x/cli/link)

# 🤖 命令

方便起见，所有命令都是全局命令，都可以在根目录下使用，无需进入子项目文件夹

- `start` 开启文档站，可用于本地开发调试
- `build` 打包编译所有子项目
- `clean` 清除构建产物，包括子项目的
- `commit` 按照提示，以更规范的形式来写 commit message
- **`release`**: 一键发布命令，先 lint 检查，再执行构建，升级版本、打 tag，发布至 npm，最终 `git push`。

## 文档命令

- `docs` 本地构建项目文档，并开启 watch 模式
- `docs:build` 构建文档，ci 命令，一般无需本地执行

## lint 命令

- `lint` 对所有子项目执行 ts 和 es 检查
- `lint:es` 对所有子项目执行 es 检查
- `lint:ts` 对所有子项目进行 ts 检查

## 发布命令

- `update` 根据 commit，自动对有改动的子项目进行版本号升级，读取 commit message 生成对应的 changelog 文档，并自动提交一个升级 commit。之后需要手动执行 `git push`。
- `update:manual` 手动指定要升级的版本号，一般用于主动提升到一个大版本号的场景。
- `publish:gears` 发布 `gears` 至 npm
- `publish:antd` 发布 `gears-antd` 至 npm
- `publish:all` 发布所有子项目
- `prerelease` 发布前检查、构建
