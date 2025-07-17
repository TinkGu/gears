---
nav:
  path: /gears-antd
group:
  path: /components
  title: 组件
toc: content
mobile: false
order: 1
---

# Utils 工具方法

## 复制到剪贴板

```typescript
function copyToClipBoard(str: string, info?: string): void;
```

基于 `clipboard-polyfill`，将文本复制到剪贴板。成功或失败会弹出 toast 提示。

## 错误提示

```typescript
function messageError(error: any, defaultMsg?: string): void;
```

自动判断错误类型，抛出合理的错误信息。相比直接抛出 `message.error(err.message)`，其优化点在于

- 对 axios 网络请求进行优化，防止统一抛出 Network Error
- 适配 antd 表单验证
- 自动遍历 error.message、error.msg 属性，查找错误信息
