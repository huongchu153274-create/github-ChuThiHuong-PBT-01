const out = document.getElementById('out');
window.addEventListener('keydown', e => {
  out.textContent = `Key: ${e.key} | Code: ${e.code} | Ctrl:${e.ctrlKey} Alt:${e.altKey} Shift:${e.shiftKey}`;
});
