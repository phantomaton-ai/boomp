import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function boomp(options = {patch: true}) {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
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

  const commands = [
    'git add package.json && git commit -m "boomp!"',
    `git tag v${packageJson.version}`,
    'git push',
    'git push --tags',
    'npm publish'
  ];

  for (const command of commands) {
    execSync(command, {cwd: path.dirname(packageJsonPath)});
  }

  return packageJson.version;
}

export { boomp };