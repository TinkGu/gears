const rimraf = require('rimraf');
const path = require('path');
const { getPackage, resolveDir, STYLE_DIR } = require('../utils');

const cwd = process.cwd();
const pkg = getPackage(cwd);

rimraf.sync(path.join(cwd, resolveDir(pkg.module)));
rimraf.sync(path.join(cwd, resolveDir(STYLE_DIR)));
rimraf.sync(path.join(cwd, resolveDir(pkg.main)));
rimraf.sync(path.join(cwd, resolveDir(pkg.types)));
