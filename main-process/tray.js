const {
  Menu,
  Tray
} = require('electron');
const path = require('path');

let appIcon = null;

appIcon = new Tray(path.join(__dirname, './horse_16_16.png'));

const menu = Menu.buildFromTemplate(
  [{
    label: '关闭',
    click() {
      appIcon.destory();
    }
  }]
)

appIcon.setToolTip('长时间放到图标上你会得到一句话: 敲里吗');
appIcon.setContextMenu(menu);