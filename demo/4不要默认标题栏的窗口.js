import { app, BrowserWindow } from 'electron';
import path from 'path';
const __dirname = import.meta.dirname;
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 100,
    height: 300,
    frame: false,
  });
  mainWindow.setAspectRatio(1)
  mainWindow.loadFile(path.resolve(__dirname,'../pages/home/index.html'));
});

//通过css  -webkit-app-region: drag; 来设置可拖动的区域，从而模拟标题栏
