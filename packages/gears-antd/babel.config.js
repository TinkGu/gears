// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonConfig = require('../../scripts/build/babel.config.js');

module.exports = {
  ...commonConfig,
  plugins: [
    ...(commonConfig.plugins || []),
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
      'antd',
    ],
  ],
};
