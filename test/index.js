'use strict';

const fs = require('fs');
const path = require('path');
const test = require('ava').test;
const pandoc = require('../index');

const mdPath = path.join(__dirname, 'asset.md');
const htmlPath = path.join(__dirname, 'asset.html');

test('create pandoc instance', t => {
  const mdToHtml = pandoc('markdown', 'html');
  t.truthy(mdToHtml);
});

test('convert', async t => {
  const mdToHtml = pandoc('markdown', 'html');
  let md = fs.readFileSync(mdPath);
  let html = fs.readFileSync(htmlPath);
  t.is((await mdToHtml(md)).toString(), html.toString());
});
