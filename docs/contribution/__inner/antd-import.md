---
hide: true
---

我们在接入 `antd` 的时候，会注意到需要在业务侧接入 `babel-plugin-import`，`antd` 据此实现按需加载。

其实现原理大概是，在业务侧做如下替换。

```javascript
import { Button } from "antd"

// 转换成

import Button from "antd/lib/button/index.js"
import "antd/lib/button/button.css"
```
