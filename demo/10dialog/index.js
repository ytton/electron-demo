const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const createWin = () => {
  let win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    }
  });
  win.loadFile(path.resolve(__dirname, 'index.html'));
  return win;
};

app.whenReady().then(() => {
  createWin();
  dialog
    .showSaveDialog({
      title: '保存文件',
      buttonLabel: 'test',
      filters: [
        { name: 'text', extensions: ['txt'] },
        { name: 'Images', extensions: ['jpg', 'png'] }
      ]
    })
    .then(res => {
      // 如果用户点击了取消按钮，res.filePath将会是undefined
      res.filePath && fs.writeFileSync(res.filePath, 'hello electron');
    });
});
