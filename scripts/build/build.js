#!/usr/bin/env node
const { sync } = require('cross-spawn');
const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
const { getPackage, resolveDir, STYLE_DIR, logger } = require('../utils');

const cwd = process.cwd();
const pkg = getPackage(cwd);
const ES_STYLE_DIR = path.join(cwd, resolveDir(STYLE_DIR));
const ES_DIR = path.join(cwd, resolveDir(pkg.module));
const args = process.argv.slice(2);
const isWatch = args.includes('--watch');

process.env.NODE_ENV = 'production';

require('./clean');

const tscRes = sync('tsc', ['--emitDeclarationOnly', '-p', './tsconfig.build.json'], { stdio: 'inherit' });
if (tscRes.status !== 0) {
  logger.br(() => {
    logger.error('😠 TS .d.ts 类型文件生成失败');
  });
  process.exit(2);
}

sync('rollup', ['-c', path.join(__dirname, 'rollup.config.js'), isWatch && '-w'].filter(Boolean), {
  stdio: 'inherit',
});

const allInOneDistCssFile = `${ES_STYLE_DIR}/index.css`;
if (fs.existsSync(allInOneDistCssFile)) {
  fs.copyFileSync(allInOneDistCssFile, `${ES_DIR}/index.css`);
  rimraf.sync(path.join(cwd, resolveDir(STYLE_DIR)));
}
