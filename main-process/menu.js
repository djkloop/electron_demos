const {
  Menu,
  app,
  ipcMain,
  BrowserWindow
} = require('electron');

let template = [{
    label: 'one',
    submenu: [{
        label: 'two',
      },
      {
        type: 'separator'
      },
      {
        label: '点击没有反应',
        click: () => console.log('厉害了竟然有反应')
      }
    ]
  },
  {
    label: 'ttt',
    submenu: [{
      label: 'fuck'
    }]
  }
]
// 创建menu模板
let menu = Menu.buildFromTemplate(template);
// ???
Menu.setApplicationMenu(menu);

// electron
app.dock.setMenu(menu);

ipcMain.on('show-context-menu', e => {
  const win = BrowserWindow.fromWebContents(e.sender);
  menu.popup(win);
})