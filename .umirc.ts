import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Seng Mitnick',
  mode: 'site',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  locales: [['zh-CN', '中文']],
  copy: ['docs/**/*.jpg'],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
