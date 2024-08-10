document.querySelector('#sendBtn').addEventListener('click', async () => {
  const inputEl = document.querySelector('#sendMsg');
  const inputVal = inputEl.value;
  // 主进程的回传消息
  const res = await window.api.invoke('sendMes', inputVal);
  console.log(res);
  const returnMsg = document.querySelector('#returnMsg');
  returnMsg.innerHTML = res;
});

window.addEventListener('DOMContentLoaded', async () => {
  if (!window.api) return;
  window.api.send('returnMeg', 'hello from render');

  window.api.on('fromMainMes', (msg) => {
    const receiveEl = document.querySelector('#receiveMsg');
    receiveEl.innerHTML = msg;
  });
  window.api.on('returnMes', (event, msg) => {
    const sendReturnMsg = document.querySelector('#sendReturnMsg');
    sendReturnMsg.innerHTML = msg;
  });
});
