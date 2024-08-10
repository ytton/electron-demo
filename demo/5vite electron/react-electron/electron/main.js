import { app, BrowserWindow } from 'electron';
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  // react项目的启动地址，这里需要根据实际情况修改，打包后可能需要修改为dist目录
  win.loadURL('http://localhost:5173');
};
app.whenReady().then(() => {
  createWindow();
});
