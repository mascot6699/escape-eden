const { ipcRenderer } = require('electron')

window.sendTx = function sendTx (asset, address, amount, memo) {
  console.log('window.sendTx():')
  console.dir(Array.from(arguments))
  // TODO: use electron-rpc-broadcast, or json-rpc
  ipcRenderer.sendToHost('rpc', {
    method: 'sendTx',
    args: Array.from(arguments)
  })
}
