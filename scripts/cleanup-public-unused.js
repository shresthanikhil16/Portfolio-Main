#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');
if (!fs.existsSync(publicDir)) {
  console.error('public directory not found at', publicDir);
  process.exit(1);
}

const backupDir = path.join(publicDir, '_removed_unused_images');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);

const textExts = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.html', '.md', '.json', '.txt', '.scss', '.sass', '.less', '.xml', '.yml', '.yaml', '.env', '.svg']);

const searchDirs = ['app', 'components', 'constants', 'utils', 'Portfolio', 'pages', 'src', 'lib'];

function walkFiles(start) {
  const results = [];
  if (!fs.existsSync(start)) return results;
  const stack = [start];
  while (stack.length) {
    const p = stack.pop();
    try {
      const stat = fs.statSync(p);
      if (stat.isDirectory()) {
        const names = fs.readdirSync(p);
        for (const n of names) stack.push(path.join(p, n));
      } else if (stat.isFile()) {
        results.push(p);
      }
    } catch (e) {
      // ignore
    }
  }
  return results;
}

const searchFiles = new Set();
for (const d of searchDirs) {
  const full = path.join(root, d);
  const files = walkFiles(full);
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (textExts.has(ext)) searchFiles.add(f);
  }
}

// include a few top-level files commonly containing references
const topFiles = ['README.md','package.json','next.config.mjs','tailwind.config.ts','postcss.config.mjs','tsconfig.json','app/layout.tsx','app/globals.css'];
for (const rf of topFiles) {
  const full = path.join(root, rf);
  if (fs.existsSync(full)) searchFiles.add(full);
}

const publicFiles = fs.readdirSync(publicDir).filter(f => {
  try { return fs.statSync(path.join(publicDir, f)).isFile(); } catch (e) { return false; }
});

function fileReferenced(filename) {
  for (const f of searchFiles) {
    try {
      const content = fs.readFileSync(f, 'utf8');
      if (content.includes(filename)) return true;
    } catch (e) {
      // ignore unreadable files
    }
  }
  return false;
}

const moved = [];
for (const file of publicFiles) {
  if (file === '_removed_unused_images') continue;
  // skip obvious directory names
  const src = path.join(publicDir, file);
  if (!fs.existsSync(src)) continue;
  // ensure we only consider files (not directories)
  const stat = fs.statSync(src);
  if (!stat.isFile()) continue;

  if (fileReferenced(file)) {
    console.log('KEEP:', file);
    continue;
  }

  const dest = path.join(backupDir, file);
  try {
    fs.renameSync(src, dest);
    console.log('MOVED:', file, '->', path.relative(root, dest));
    moved.push(file);
  } catch (e) {
    console.error('FAILED to move', file, e.message);
  }
}

console.log(`\nDone. Moved ${moved.length} files to ${path.relative(root, backupDir)}`);
if (moved.length) console.log('Moved files:', moved.join(', '));
process.exit(0);
