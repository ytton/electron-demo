import { ipcRenderer } from 'electron';

document.querySelector('button').addEventListener('click', () => {
  console.log('test??????', window);
  ipcRenderer.send('onClick', '测试');
});
