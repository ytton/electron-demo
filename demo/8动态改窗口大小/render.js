document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', function () {
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    window.api.changeWindowSize({ width, height });
  });
});
