const path = require('path');

const option = {
  title: 'title',
  body: '我是内容啊啊啊',
  icon: path.join(__dirname, '../main-process/hot.png')
}

const myNotification = new window.Notification(
  option.title,
  option
);


myNotification.onclick = function() {
  console.log('clicked');
}