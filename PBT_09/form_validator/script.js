const f = document.getElementById('f');
const msg = document.getElementById('msg');
f.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(f);
  const obj = Object.fromEntries(data.entries());
  msg.textContent = `Submitted: ${obj.name} / ${obj.email} / ${obj.phone}`;
  msg.style.color = 'green';
});
f.addEventListener('reset', () => { msg.textContent = ''; });
