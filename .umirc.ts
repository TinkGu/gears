import pkg from './packages/gears/package.json';

/*
 * dumi 具体配置可以请看
 * https://d.umijs.org/zh-CN/config
 */
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const publicPath = isDev ? '/' : '//tinkgu.github.io/gears/';

const injectSassVariables = (content, loaderContext) => {
  const { resourcePath, rootContext } = loaderContext;

  if (resourcePath.includes('/demos/')) {
    return content;
  }

  if (resourcePath.includes('/packages/gears/src')) {
    return `@import "${path.join(rootContext, 'packages/gears/src/styles/variables.scss')}";\r${content}`;
  }

  if (resourcePath.includes('/packages/gears-antd/src')) {
    return `@import "${path.join(rootContext, 'packages/gears-antd/src/styles/variables.scss')}";\r${content}`;
  }

  return content;
};

export default {
  // NOTE: 当前版本（22.04）umi 的 mfsu bug 比较多，而且也没有很明显的提速，谨慎开启
  // mfsu: {
  //   development: {
  //     output: './.mfsu-dev',
  //   },
  // },
  mode: 'site',
  title: ' ',
  // favicon: LOGO,
  // logo: LOGO,
  publicPath,
  outputPath: 'dist_docs',
  hash: true,
  history: {
    type: 'hash',
  },
  devServer: {
    port: '17122',
  },
  alias: {
    '@tinks/gears': path.resolve('packages/gears/src'),
    '@tinks/gears/*': path.resolve('packages/gears/src/*'),
    '@tinks/gears-antd': path.resolve('packages/gears-antd/src'),
    '@tinks/gears-antd/*': path.resolve('packages/gears-antd/src/*'),
    '@tinks/gears-styles': path.resolve('packages/gears-styles'),
    '@tinks/gears-styles/*': path.resolve('packages/gears-styles/*'),
    'demo-helper': path.resolve('packages/demo-helper/index.ts'),
  },
  chainWebpack(config) {
    config.plugins.delete('copy');

    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach((item) => {
      item
        .use('sass-loader')
        .loader('sass-loader')
        // .options({
        //   additionalData: injectSassVariables,
        // })
        .end();
    });
  },
  // antd5 已经不需要 import plugin
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: 'css',
  //     },
  //     'antd',
  //   ],
  // ],
  sass: {},
  navs: [
    null,
    {
      title: '更多工具👇🏻',
      children: [
        {
          title: '公共代码库 Xeno',
          path: 'https://tinkgu.github.io/xeno/#/',
        },
      ],
    },
    {
      title: `v${pkg.version}`,
      path: 'https://github.com/TinkGu/gears',
    },
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  apiParser: {
    propFilter: {
      skipNodeModules: true,
    },
  },
  webpack5: {},
};
