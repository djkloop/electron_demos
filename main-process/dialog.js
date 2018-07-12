const { dialog } = require('electron');

dialog.showErrorBox('敲里吗...', ' 又双叒叕出错了... ')

// dialog.showMessageBox({
//   type: 'info',
//   title: 'message',
//   message: 'hello',
//   buttons: ['好的', '错的']
// }, index => {
//   if(index === 0) {
//     console.log('点击了好的按钮');
//   } else {
//     console.log('点击了错的按钮');
//   }
// });

dialog.showOpenDialog(
  {
    properties: ['openFile', 'openDirectory']
  },
  files => {
    console.log(
      files
    );
  }
)

dialog.showSaveDialog({
  title: '保存东西',
  filters: [
    {
      name: 'some',
      extensions: ['js']
    }
  ]
}, filename => {
  console.log(filename);
});