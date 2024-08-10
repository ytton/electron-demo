const { contextBridge, ipcRenderer }  =  require("electron");


contextBridge.exposeInMainWorld("api", {
  showMenu: (menu) => ipcRenderer.send("showMenu", menu),
})