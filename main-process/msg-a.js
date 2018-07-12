const {
  ipcMain
} = require('electron');

ipcMain.on('main-msg', e => {
  e.returnValue = "main-msg";
});

ipcMain.on('main-msg-1', (e, args) => {
  console.log(args.sendMsg)
  e.sender.send('main-msg-1-back', {
    name: 'djkloop'
  })
});