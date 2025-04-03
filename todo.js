// Get the elements
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Set up the todo list
let todos = [];

// Handle add todo button click
addTodoButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todo = {
            text: todoText,
            completed: false
        };
        todos.push(todo);
        todoInput.value = '';
        renderTodoList();
    }
});

// Handle todo item click
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo-delete')) {
        const todoIndex = event.target.parentNode.dataset.index;
        todos.splice(todoIndex, 1);
        renderTodoList();
    }
});

// Render the todo list
function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.dataset.index = index;
        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = todo.text;
        const todoDelete = document.createElement('span');
        todoDelete.classList.add('todo-delete');
        todoDelete.textContent = 'X';
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDelete);
        todoList.appendChild(todoItem);
    });
}