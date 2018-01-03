const path = require('path')

// please STFU React with your devtools suggestion
window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {}

// bootstrap with platform specific styles
var os = process.platform
switch (os) {
  case 'darwin':
    document.body.classList.add('platform-mac')
    break
  case 'win32':
    document.body.classList.add('platform-windows')
    break
  case 'linux':
    document.body.classList.add('platform-linux')
    break
}

// load up proper process/BrowserWindow JS file
switch (path.basename(window.location.pathname)) {
  case 'index.html': require('../src/app/index.js'); break
  case 'mnemonic.html': require('../src/app/mnemonic/index.js'); break
  case 'network.html': require('../src/app/network/index.js'); break
  case 'passphrase.html': require('../src/app/passphrase/index.js'); break
  case 'wallet.html': require('../src/app/wallet/index.js'); break
}
