# json2xlsx

使用 sheetjs，文档：https://docs.sheetjs.com/docs/getting-started/installation/nodejs

## 📊 示例

👇👇 将 json 数据 👇👇

```json
[
  { "name": "张三", "age": 18 },
  { "name": "李四", "age": 20 }
]
```

👇👇 转换为 Excel 文件，格式如下 👇👇

| name | age |
| ---- | --- |
| 张三 | 18  |
| 李四 | 20  |

## ✨ 安装

```js
pnpm i
```

## 💨 运行

1. 生成测试数据

```js
  pnpm init:data
```

2. 将 json 数据转换为 excel

```js
  pnpm build
```

## 🏗️ 产物

output.xlsx
