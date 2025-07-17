const path = require('path');
const chalk = require('chalk');

/**
 * 获取文件夹
 * 将 ./path/to/file.js 转为 ./path/to
 * @param {string} dir
 */
function resolveDir(dir) {
  if (!/\.(t|j)s$/.test(dir)) {
    return dir;
  }
  return path.dirname(dir);
}

/**
 * 获取项目目录下的 package.json
 * @param {string} rootPath
 */
function getPackage(rootPath) {
  // eslint-disable-next-line import/no-dynamic-require
  return require(path.join(rootPath, 'package.json'));
}

/**
 * 安全退出
 * @param {Function} callback
 */
function onExit(callback) {
  process.on('exit', callback);
  process.on('SIGINT', callback);
  process.on('SIGUSR1', callback);
  process.on('SIGUSR2', callback);
  process.on('uncaughtException', callback);
}

/**
 * 日志，接受一个 callback，返回字符串或一组字符串，将其打印
 */
const logger = (callback) => {
  if (typeof callback !== 'function') {
    return;
  }

  const msgs = callback(chalk, {
    info: (msg) => chalk.cyan(msg),
    error: (msg) => chalk.red.bold(msg),
  });

  if (Array.isArray(msgs)) {
    // eslint-disable-next-line no-console
    console.log(...msgs);
    return;
  }

  if (typeof msgs !== 'string') {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(msgs);
};

logger.info = (msg) => logger((_, i) => i.info(msg));
logger.error = (msg) => logger((_, i) => i.error(msg));
logger.br = (cb) => {
  if (typeof cb === 'function') {
    logger((_, i) => i.info('\n'));
    cb();
    logger((_, i) => i.info('\n'));
    return;
  }
  logger((_, i) => i.info('\n'));
};

const STYLE_DIR = 'es-style';

module.exports = {
  resolveDir,
  getPackage,
  onExit,
  logger,
  STYLE_DIR,
};
