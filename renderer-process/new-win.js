const {
  ipcRenderer
} = require('electron');
const {
  BrowserWindow
} = require('electron').remote;
const path = require('path');

const btn = document.querySelector('#new-win');

let win;

var winLoad = function(e) {
  e.stopPropagation()
  const winId = BrowserWindow.getFocusedWindow().id;

  win = new BrowserWindow({
    width: 100,
    height: 100,
    show: false
  });
  win.loadURL(path.join('file:', __dirname, '../new-win.html'));

  win.webContents.on('did-finish-load', e => {
    win.webContents.send('msg', winId, {
      name: 'djkloop',
      text: 'hello'
    })
  });

  ipcRenderer.on('back', (e, winId, msg) => {
    console.log(msg);
  });
}

btn.onclick = winLoad;