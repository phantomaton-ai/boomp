const fs = require('fs');
const path = require('path');

function boomp(options = {patch: true}) {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  const version = packageJson.version.split('.');
  const [major, minor, patch] = version;

  if (options.major) {
    version[0] = parseInt(major) + 1;
    version[1] = 0;
    version[2] = 0;
  } else if (options.minor) {
    version[1] = parseInt(minor) + 1;
    version[2] = 0;
  } else {
    version[2] = parseInt(patch) + 1;
  }

  packageJson.version = version.join('.');
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Commit the change to package.json
  require('child_process').execSync('git add package.json && git commit -m "boomp!"', {
    cwd: path.dirname(packageJsonPath)
  });

  // Tag the new version
  require('child_process').execSync(`git tag v${packageJson.version}`, {
    cwd: path.dirname(packageJsonPath)
  });

  // Push the changes and tags
  require('child_process').execSync('git push && git push --tags', {
    cwd: path.dirname(packageJsonPath)
  });

  return packageJson.version;
}

module.exports = { boomp };