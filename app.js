

//defining elements and assigning them into varriable
const newTask = document.querySelector('#text-option');
const addBtn = document.querySelector('.add-btn');
const todoUl = document.querySelector('.incomplete-tasks-ul');
const completeUl = document.querySelector('.complete-tasks-ul');

// functions 

// creating New Task
let createTask = function (task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkBox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

//When Click On Add Button It Will Execute
let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);

    newTask.value = '';
    incompleteToComplete(listItem,completeTask);
}

//Complete Task Making
let completeTask = function(){
    let listItem = this.parentNode;
    let checkBox = listItem.querySelector('input');
    checkBox.remove();

    let div = document.createElement('div');
    div.className = 'btn-div';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerText = "Delete";

    div.appendChild(deleteBtn);
    listItem.appendChild(div);

    completeUl.appendChild(listItem);
    completeToRemove(listItem , deleteTask);
}

// Removing Items
let completeToRemove = function(listItem , deleteTask){
    let deleteBtn = listItem.querySelector('.btn-div .delete-btn ');
    deleteBtn.onclick = deleteTask;
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let li = listItem.parentNode;
    li.remove();
}


// Incomplete To Complete Items

let incompleteToComplete = function (listItem, completed) {
    let checkBox = listItem.querySelector('input');
    checkBox.onchange = completed;
}

addBtn.addEventListener('click', addTask);

