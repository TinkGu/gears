const { sync } = require('cross-spawn');
const semver = require('semver');
const { logger } = require('../utils');

/** 校验线上版本号是否小于推送的版本号 */
module.exports = function checkPkgVersion(pkgName, version) {
  if (!pkgName) {
    throw new Error('[check-pkg-version]: no pkg name');
  }

  const { error, stdout } = sync('npm', ['view', pkgName, 'version', '--registry=https://registry.npmjs.org/']);

  if (error) {
    throw error;
  }

  const latestVersion = stdout && stdout.toString();
  try {
    if (!semver.gt(version, latestVersion)) {
      logger((c) => [c.dim.white.bold(`[${pkgName}]`), c.dim(': 无需 publish')]);
      process.exit(0);
    }
  } catch (err) {
    process.exit(0);
  }
};
