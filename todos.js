const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

async function fetchTodos() {
  const res = await fetch('https://imminent-reliable-wizard.glitch.me');
  const todos = await res.json();

  todoList.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async () => {
      await fetch(`https://imminent-reliable-wizard.glitch.me/${todo.id}`, {
        method: 'DELETE',
      });
      fetchTodos();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

document.getElementById('todoForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const todo = { text: todoInput.value };
  await fetch('https://imminent-reliable-wizard.glitch.me', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  todoInput.value = '';
  fetchTodos();
});

fetchTodos();
