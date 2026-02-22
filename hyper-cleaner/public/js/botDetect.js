window.botDetect = {
  onUser: function(callback) {
    document.addEventListener('click', callback, { once: true });
    document.addEventListener('keydown', callback, { once: true });
    document.addEventListener('touchstart', callback, { once: true });
  }
};
