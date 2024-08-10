import { app, BrowserWindow, ipcMain } from 'electron';
const __dirname = import.meta.dirname;
import path from 'path';
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  win.loadFile(path.resolve(__dirname, 'index.html'));
  return win;
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on('onClick', (event, arg) => {
  console.log(arg);
});
