/** 校验是否需要 npm publish，成功后执行 */
const path = require('path');
const { sync } = require('cross-spawn');
const checkPkgVersion = require('./check-pkg-version');
const { logger } = require('../utils');

const pkgDir = process.cwd();
const pkg = require(path.join(pkgDir, './package.json'));
checkPkgVersion(pkg.name, pkg.version);
logger.info('---- 准备发布 ' + pkg.name + ' ----');
sync(`npm publish --registry https://registry.npmjs.org/`, { stdio: 'inherit', shell: true });
