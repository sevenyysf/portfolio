import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = resolve('site');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"\s]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate element IDs');
const links = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
for (const link of links) {
  if (/^(https:|mailto:)/.test(link)) continue;
  assert(!link.startsWith('/'), `Absolute path breaks GitHub project hosting: ${link}`);
  if (link.startsWith('#')) {
    assert(link === '#' || ids.includes(link.slice(1)), `Missing anchor: ${link}`);
    continue;
  }
  const path = resolve(root, link);
  assert(path.startsWith(root + sep), `Asset escapes website: ${link}`);
  assert((await stat(path)).isFile(), `Missing file: ${link}`);
}
const pdf = await readFile(resolve(root, 'assets/pretri-seveny-cv.pdf'));
assert.equal(pdf.subarray(0, 5).toString(), '%PDF-', 'Invalid CV file');
execFileSync(process.execPath, ['--check', resolve(root, 'app.js')], { stdio: 'inherit' });
console.log(`Verified ${links.length} links/assets, ${ids.length} unique IDs, CV PDF, and JavaScript syntax.`);
