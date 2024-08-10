import { app, BrowserWindow } from 'electron';
import path from 'path';
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.loadFile(path.resolve('../pages/home/index.html'));
});
