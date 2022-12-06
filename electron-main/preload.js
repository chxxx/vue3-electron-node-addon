// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  const { addon } = require('hello_world');
  replaceText(`hello-world`, addon.hello());
});
let ffi = require('ffi-napi');
global.addon = require('hello_world');
global.Dll = ffi.Library('D:/project/electron/vue-vben-admin/dll/MyDLL.dll', {
  Add: ['float', ['float', 'float']],
  Hello: ['string', []],
  StrLength: ['int', ['string']],
});
