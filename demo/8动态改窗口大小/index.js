const { app, BrowserWindow, ipcMain, screen } = require('electron');


const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  win.setTitle('My App');
  win.loadFile(path.resolve(__dirname, 'index.html'));
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ReactDOM
ipcMain.on('changeWindowSize', (event, size) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const width = size.width * 1;
  const height = size.height * 1;
  const scSize = screen.getPrimaryDisplay().workAreaSize;
  const x = scSize.width / 2 - width / 2;
  const y = scSize.height / 2 - height / 2;
  win.setBounds({ width, height, x, y }, true);
});
