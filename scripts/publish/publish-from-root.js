const fs = require('fs');
const path = require('path');
const { sync } = require('cross-spawn');
const checkPkgVersion = require('./check-pkg-version');

const pkgDirName = process.argv.slice(2)[0];
const pkgPath = path.resolve(__dirname, `../../packages/${pkgDirName}`);

if (!fs.lstatSync(pkgPath).isDirectory()) {
  return;
}

const pkg = require(path.join(pkgPath, 'package.json'));
checkPkgVersion(pkg.name, pkg.version);
sync(`cd packages/${pkgDirName} && npm publish --registry https://registry.npmjs.org/`, { stdio: 'inherit', shell: true });
