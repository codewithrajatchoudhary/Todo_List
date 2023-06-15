// Get the necessary elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('count');

// Function to update the task count
function updateTaskCount() {
  const totalTasks = todoList.getElementsByTagName('li').length;
  taskCount.textContent = totalTasks;
}

// Function to create a new todo item
function createTodoItem(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  li.appendChild(checkbox);

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = text;
  li.appendChild(taskText);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  li.appendChild(deleteButton);

  // Add click event listener to the delete button
  deleteButton.addEventListener('click', function () {
    li.remove();
    updateTaskCount();
  });

  // Add change event listener to the checkbox
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  todoList.appendChild(li);
  updateTaskCount();
}

// Function to handle adding a new todo item
function addTodo() {
  const todoText = input.value.trim(); // Remove leading/trailing whitespace
  if (todoText !== '') {
    createTodoItem(todoText);
    input.value = ''; // Clear the input field
  }
}

// Add click event listener to the add button
addButton.addEventListener('click', addTodo);

// Add keydown event listener to the input field to allow adding todos with Enter key
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
