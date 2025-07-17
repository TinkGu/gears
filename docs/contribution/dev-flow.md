---
order: 2
---

# 贡献代码

- 从 master checkout 出新分支
- 到对应 package 下新增组件
- 编写 demo 文档，`pnpm start` 实时预览，作为调试使用
- **选择性地 export 组件、类型和方法**
- 提交 PR 到 master，**如果本次提交有 breaking change，要附带在 pr 描述中**
- 由维护者进行 code review
- 测服验证
- 通过测服验证后，merge PR
- 组件库升级版本，同时在业务侧使用升级后的组件库版本

# git 规范

## 分支名

团队规范保持一致，大致格式为 `行为/日期戳-需求描述`，比如 `feature/210903-uploader`。如果是新增一个组件，最好在分支上就展示组件名。

目前约定的行为包括

- `feature` 新增、修改代码，包括性能优化等等
- `hotfix` 修改缺陷
- `chore` 修改、新增构建工具

## commit 规范

`commit` 提交需要遵循规范，这个已经通过约束，配置在 git hook 中，支持的前缀有 `feat`、`fix`、`perf`、`chore`、`docs`。

注意，其中 `feat`、`fix`、`perf` 前缀的 commit，在使用我们的构建脚本之后，会自动生成 `CHANGELOG.md`，并且**会影响是否可以 publish 新的版本**。

具体原理说明如下：

每次在 `release` 的过程中，lerna 会自动检查历史 commit，和远端进行比较。如果发现最近的 commit 有 `feat`、`fix`、`perf` 的，会自动要求你提升版本，并据此提交一个新的 commit，记录下本次版本升级。**如果没有对应类型（`feat`、`fix`、`perf`）的 commit，lerna 会拒绝提升版本，导致无法发布。**

升级后，会根据你的 commit 信息，在对应的子项目下生成 `CHANGELOG.md` 文件。

`CHANGELOG.md` 的信息和过往 commit 信息一致，根据 `feat`、`fix`、`perf` 分门别类提取出你过往的 commit message。所以请大家务必注意

- `feat`、`fix`、`perf` 的 commit 信息必须认真填写，因为这些 commit 信息最终都会被作为文档。
- `feat(gears): xxxx`：如果你的修改只涉及到某个库，就使用 scope 写法，这样 changelog 会生成在对应的子项目下。
- 代码要成块提交，一个 commit 描述了一段完整的功能、bugfix；不要零零碎碎地描述了好几次，保持 changelog 的整洁。
- 也不要把好几个功能糅到一个巨大的 commit 中提交，保证一个 commit 只做了一件事情。

## 组件包含规范

提出 PR 以后，维护者应该检查新增的组件是否包含以下内容

- 适当的源码注释
- 合理的 export
- 组件文档，且至少有一个示例 <Badge>后续通过提交前检查 demos 目录来实现</Badge>
- 检查是否有 breaking change
