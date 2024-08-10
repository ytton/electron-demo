const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  changeWindowSize: ({ width, height }) => {
    ipcRenderer.send('changeWindowSize', { width, height });
  }
});
