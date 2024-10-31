#!/usr/bin/env node

import bumpkin from './bumpkin.js';

const [, , versionField = 'patch'] = process.argv;

try {
  const newVersion = bumpkin[versionField]();
  console.log(`Bumped ${versionField} version to ${newVersion}`);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}