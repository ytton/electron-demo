import { BrowserWindow, app, ipcMain } from 'electron';
import path from 'path';
const __dirname = import.meta.dirname;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js')
    }
  });
  win.loadFile(path.resolve(__dirname, './index.html'));
  win.webContents.toggleDevTools();
  return win;
};

app.whenReady().then(() => {
  const win = createWindow();
  setTimeout(() => {
    win.webContents.send('fromMainMes', 'hello my renderer');
  }, 100);
});

ipcMain.on('sendMes', (event, arg) => {
  console.log('sendMes', arg); // prints "pong"
  event.reply('returnMes', 'returnMes pong' + args);
});

ipcMain.handle('sendMes', async (event, arg) => {
  console.log('invokeMes', event, arg);
  return 'invoke pong' + arg;
});

ipcMain.on('returnMeg', async (event, arg) => {
  console.log('returnMeg', arg);
  event.reply('returnMes', 'returnMes ' + arg);
});
