const click = document.querySelector('#button');
const path = require("path");
const BrowserWindow = require("electron").remote.BrowserWindow;

let win;

click.addEventListener('click', () => {
  // window.open("https://blog.djkloop.cn")

  win = new BrowserWindow({
    width: 300,
    height: 200,
    frame: true
  });

  win.on("close", () => win = null);

  win.loadURL(path.join('file:', __dirname, '../model.html'));
  console.dir(win);
});