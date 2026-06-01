// Simple Todo App with localStorage
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const clearCompleted = document.getElementById('clear-completed');
const clearAll = document.getElementById('clear-all');

const STORAGE_KEY = 'pbt09_todos_v1';

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); }

function render(){
  list.innerHTML = '';
  todos.forEach((t, i)=>{
    const li = document.createElement('li');
    li.className = t.done ? 'completed' : '';

    const chk = document.createElement('input');
    chk.type = 'checkbox'; chk.checked = t.done;
    chk.addEventListener('change', ()=>{
      todos[i].done = chk.checked; save(); render();
    });

    const span = document.createElement('span');
    span.textContent = t.text;

    const del = document.createElement('button');
    del.textContent = 'Xóa';
    del.addEventListener('click', ()=>{ todos.splice(i,1); save(); render(); });

    li.appendChild(chk);
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  })
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const v = input.value.trim();
  if(!v) return;
  todos.push({text:v, done:false});
  input.value = '';
  save(); render();
});

clearCompleted.addEventListener('click', ()=>{
  todos = todos.filter(t=>!t.done); save(); render();
});
clearAll.addEventListener('click', ()=>{ if(confirm('Xóa tất cả?')){ todos=[]; save(); render(); }});

render();