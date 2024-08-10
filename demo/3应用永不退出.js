import { app, BrowserWindow } from 'electron';
import path from 'path';
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
  });
  mainWindow.loadFile(path.resolve('../pages/home/index.html'));
};
app.whenReady().then(() => {
  createMainWindow();
});
// 当所有窗口被关闭时的监听
app.on('window-all-closed', () => {
  // 通过process.platform可以判断当前操作系统
  // if (process.platform !== 'darwin') {
  //   app.quit(); // 退出应用
  // }
  // 当所有窗口被关闭时，重新创建主窗口从而实现永不退出
  createMainWindow();
});
app.on('activate', () => {
  // 在macOS上，当点击dock图标并且没有其他窗口打开时，重新创建一个窗口
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow;
  }
});
