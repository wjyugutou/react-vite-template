# react vite template
react@19 vite@6 ts@5.7.2 eslint@9 zustand@5

# node >= 18

# ENV

env 类型 写在 `types/vite-env.d.ts`

```ts
interface ImportMetaEnv {
  // 本身变量
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
  // color schema storage key
  readonly VITE_COLOR_SCHEMA_STORAGE_KEY: string
}
```

# 请求
请求使用alova + fetchAdapter

# 样式
使用unocss
