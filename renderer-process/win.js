const { BrowserWindow } = require('electron').remote;
const { ipcRenderer } = require('electron');

onload = () => {
  ipcRenderer.on('msg', (e, winId, msg) => {
    let win = BrowserWindow.fromId(winId);

    console.log(msg);

    win.webContents.send('back', winId, {
      name: 'eee',
      text: 'hello~'
    })
  })
}