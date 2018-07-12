const ipc = require('electron').ipcRenderer;

const MainBtn = document.querySelector('#main-msg');
MainBtn.addEventListener('click', () => {
  const msg = ipc.sendSync('main-msg');
  console.log(msg);

  ipc.send('main-msg-1', {
    sendMsg: 'test-main-msg-1'
  })

  ipc.on('main-msg-1-back',(e, args) => {
    console.log(args.name);
  });
});

