let taskList = document.getElementById('task-list');
let addTaskButton = document.getElementById('add-task');
let taskInput = document.getElementById('task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  let task = taskInput.value.trim();
  if (task) {
    let taskListItem = document.createElement('li');
    taskListItem.innerHTML = `
      <span class="task-text">${task}</span>
      <span class="edit-task">Edit</span>
      <span class="delete-task">Delete</span>
    `;
    taskList.appendChild(taskListItem);
    taskInput.value = '';
  }
}

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-task')) {
    editTask(event.target.parentNode);
  } else if (event.target.classList.contains('delete-task')) {
    deleteTask(event.target.parentNode);
  }
});

function editTask(taskListItem) {
  let taskText = taskListItem.querySelector('.task-text');
  let editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = taskText.textContent;
  taskListItem.appendChild(editInput);
  taskText.style.display = 'none';
  editInput.focus();
  editInput.addEventListener('blur', function() {
    taskText.textContent = editInput.value;
    editInput.remove();
    taskText.style.display = 'block';
  });
}

function deleteTask(taskListItem) {
  taskList.removeChild(taskListItem);
}