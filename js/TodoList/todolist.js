const todoList = [
    // {
    //     name: 'make dinner',
    //     dueDate: '2022-12-22'
    // },
    // {
    //     name: 'wash dishes',
    //     dueDate: '2022-12-22'
    // }
];



function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate; to simply these two steps we can minimize it by
        const { name, dueDate } = todoObject;

        const html = `    
    <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        renderTodoList();">
        Delete</button>
         `;

        // `
        // <div>${name}</div> 
        // <div>${dueDate}</div> 
        // <button onclick="
        //         todoList.splice(${i},1);
        //         renderTodoList();">Delete</button>
        // `;


        todoListHTML += html;
    }


    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');  //this is used to fetch the input (text typed in the placehoder )
    const name = inputElement.value;  //the value property  will get the content entered in the placehoder <input>.

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
        //if the property and the variable name are the same then we can declare it as
        //name,
        //dueDate  This known as shorthand property
    });




    inputElement.value = "";

    renderTodoList();


}