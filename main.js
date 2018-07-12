const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");


let win;

const createWindow = () => {
  // 创建window
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // 读取文件
  const URL = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true
  });

  console.log(URL);
  win.loadURL(URL);
  // 关闭的时候把win置空
  win.on('close', () => {
    win = null;
  })

  require('./main-process/menu');
  require('./main-process/msg-a');
  require('./main-process/tray');
  // require('./main-process/dialog');
}

app.on("ready", createWindow);
// 所有都关闭之后进行判断
app.on("window-all-closed", () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});
//
app.on("activate", () => {
  if(win === null) {
    createWindow()
  }
});