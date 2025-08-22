const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const {
            name,
            dueDate
        } = todoObject;
        const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const nameInputElement = document.querySelector('.js-name-input');
    const name = nameInputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;

    if (name && dueDate) {
        todoList.push({
            name,
            dueDate
        });

        nameInputElement.value = '';
        dueDateInputElement.value = '';

        renderTodoList();
        saveToStorage();
    }
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}