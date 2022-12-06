const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');

v8.setFlagsFromString('--no-lazy');

bytenode.compileFile('./dist/bundled/index.js', './dist/bundled/index.jsc');

fs.copyFile('./electron-main/index.bytenode.js', './dist/bundled/index.js', (err) => {
  if (err) throw err;
  process.exit();
});
