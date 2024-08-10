const { app, BrowserWindow, ipcMain, screen, Menu } = require('electron');

const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    height: 400,
    width: 800,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  win.setTitle('菜单demo');
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

Menu.setApplicationMenu(
  Menu.buildFromTemplate([
    {
      label: '文件',
      submenu: [
        {
          label: '子功能',
          click: () => {
            console.log('123');
          },
          submenu: [
            {
              label: '子功能',
              click: () => {
                console.log('123');
              }
            },
            {
              label: '子功能'
            },
            {
              label: '子功能'
            }
          ]
        },
        {
          label: '子功能'
        },
        {
          type: 'separator'
        },
        {
          label: '子功能'
        }
      ]
    },
    {
      role: 'about',
      label: '关于'
    },
    {
      label: '功能1'
    },
    {
      label: '功能2'
    }
  ])
);



ipcMain.on('showMenu', event => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const menu = Menu.buildFromTemplate([
    {
      label: '文件',
      submenu: [
        {
          label: '子功能',
          click: () => {
            console.log('123');
          },
          submenu: [
            {
              label: '子功能',
              click: () => {
                console.log('123');
              }
            },
            {
              label: '子功能'
            },
            {
              label: '子功能'
            }
          ]
        },
        {
          label: '子功能'
        },
        {
          type: 'separator'
        },
        {
          label: '子功能'
        }
      ]
    },
    {
      role: 'about',
      label: '关于'
    },
    {
      label: '功能1'
    },
    {
      label: '功能2'
    }
  ]);
  menu.popup(win);
});