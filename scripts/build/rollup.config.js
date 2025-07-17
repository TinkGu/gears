const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
// const esbuild = require('rollup-plugin-esbuild').default;
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const { getPackage, resolveDir, STYLE_DIR } = require('../utils');

const cwd = process.cwd();
const pkg = getPackage(cwd);
const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

// 保证 dependencies 的子包也被认为是 external
// (i.e. lodash/pick)
function makeExternalPredicate(externalArr) {
  if (!externalArr.length) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
}

function getExternal() {
  const preBuiltins = ['@babel/runtime', '@tinks/xeno', 'rc-field-form', 'style-inject', 'react-sortable-hoc'];
  const external = Object.keys(pkg.peerDependencies || {}).concat(preBuiltins);
  return makeExternalPredicate(external);
}

function getConfig({ format, extractCSS = false }) {
  return {
    external: getExternal(),
    input: path.join(cwd, 'src'),
    plugins: [
      commonjs(),
      nodeResolve({ extensions, browser: true, modulesOnly: true }),
      // esbuild({
      //   minify: false, // umd 模块才需要 minify
      //   sourceMap: false,
      //   tsconfig: path.resolve(process.cwd(), 'tsconfig.build.json'),
      // }),
      babel({
        extensions,
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', '../../node_modules/**'],
        plugins: [['@babel/plugin-transform-runtime', { useESModules: format === 'esm' }]],
      }),
      postcss({
        namedExports: true,
        // 考虑到大部分代码都是业务项目里 copy 进来修改的，css 文件也和业务代码保持一致
        modules: true,
        extract: extractCSS,
        inject(cssVariableName) {
          return `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`;
        },
        extensions: ['.scss', '.css'],
        use: {
          sass: {
            // 免去在每个文件头部引入 variables.scss 的困扰
            // data: `@import "${path.join(cwd, 'src')}/styles/variables.scss";\r`,
          },
        },
      }),
    ],
  };
}

const esmConfig = {
  ...getConfig({ format: 'esm' }),
  output: {
    format: 'esm',
    entryFileNames: '[name].js',
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: path.join(cwd, resolveDir(pkg.module)),
  },
};

const cjsConfig = {
  ...getConfig({ format: 'cjs' }),
  output: {
    format: 'cjs',
    dir: path.join(cwd, resolveDir(pkg.main)),
    exports: 'named',
  },
};

const extraCSSConfig = {
  ...getConfig({ format: 'esm', extractCSS: true }),
  output: {
    format: 'esm',
    entryFileNames: '[name].js',
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: path.join(cwd, resolveDir(STYLE_DIR)),
  },
};

export default [esmConfig, cjsConfig, extraCSSConfig];
