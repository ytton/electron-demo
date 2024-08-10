const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    return ipcRenderer.send(channel, data);
  },
  on: (channel, func) => {
    ipcRenderer.on(channel, (_, data) => func(data));
  },
  invoke: (channel, data) => {
    return ipcRenderer.invoke(channel, data);
  }
});
