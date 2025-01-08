import { antfu } from '@antfu/eslint-config'

export default antfu({
  vue: false,
  react: true,
  toml: false,
  yaml: false,
  test: false,
  jsx: false,
  unocss: true,
}, [
  {
    rules: {
      'no-console': 'off',
      // 关闭，可使 对象/数组 自由换行
      'antfu/consistent-list-newline': 'off',
    },
  },
  {
    files: ['tsconfig.json', 'tsconfig.*.json'],

    rules: {
      // tsconfig.json中的key值排序
      'jsonc/sort-keys': 'off',
    },
  },
])
