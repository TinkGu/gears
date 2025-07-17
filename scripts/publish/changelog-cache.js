/** 比对本地 changelog 和远端记录，决定是否进行发版推送 */

const fs = require('fs');
const crypto = require('crypto');
const { sync } = require('cross-spawn');
const path = require('path');

let hasJSONChanged = false;
const jsonFilePath = path.resolve(__dirname, '../../changelogcache.json');
const changelogMd5Cache = require('../../changelogcache.json');

function getChangelogMD5(options) {
  const md5er = crypto.createHash('md5');
  const stream = fs.createReadStream(options.filePath);
  return new Promise((resolve, reject) => {
    stream.on('data', function (chunk) {
      md5er.update(chunk);
    });
    stream.on('end', function () {
      const str = md5er.digest('hex').toUpperCase();
      resolve(str);
    });
    stream.on('error', reject);
  });
}

/** 检查 changelog 是否更新，比对 md5 值，默认 true */
async function checkChangelogUpdated(options) {
  const { packagePath, changelogPath } = options;
  const pkg = require(packagePath);
  const pkgName = pkg && pkg.name;
  const cachedMd5 = changelogMd5Cache[pkgName];

  if (!pkgName) {
    return true;
  }

  const md5 = await getChangelogMD5({ filePath: changelogPath });
  if (md5) {
    if (md5 !== cachedMd5) {
      changelogMd5Cache[pkgName] = md5;
      fs.writeFileSync(jsonFilePath, JSON.stringify(changelogMd5Cache, null, 2));
      hasJSONChanged = true;
    } else {
      return false;
    }
  }

  return true;
}

function commitChangelogCache() {
  if (hasJSONChanged) {
    sync(`git add ${jsonFilePath}`, { stdio: 'inherit', shell: true });
    sync(`git commit -m "chore: update changelogcache.json"`, { stdio: 'inherit', shell: true });
    sync(`git push origin HEAD --follow-tags`, { stdio: 'inherit', shell: true });
  }
}

module.exports = {
  checkChangelogUpdated,
  commitChangelogCache,
};
