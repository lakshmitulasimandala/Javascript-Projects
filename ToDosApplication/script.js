let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn Javascript",
        uniqueNo: 3
    }
]

function onToDoStatusChange(labelId){//checkboxId, labelId) {
    //let checkboxElem = document.getElementById(checkboxId);
    let labelElem = document.getElementById(labelId);
    //if(checkboxElem.checked === true){
        //console.log(checkboxElem.checked);
        //labelElem.classList.add("checked");
     //}else{
        //labelElem.classList.remove("checked");
    //}
    labelElem.classList.toggle("checked");
}


function onDeleteTodoItem(todoId){
    let todoElem = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElem);
}


function createandAppendTodoItem(todo) {

    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    //console.log(todoItemsContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    //console.log(inputElement);

    inputElement.onclick = function(){
        onToDoStatusChange(checkboxId, labelId);
    }


    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
    //console.log(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    //console.log(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
    //console.log(deleteIconContainer);

    let deleteIconElement = document.createElement("i");
    deleteIconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIconElement);
    //console.log(deleteIconElement);

    deleteIconElement.onclick = function(){
        onDeleteTodoItem(todoId);
    }

}

for (let todo of todoList) {
    createandAppendTodoItem(todo);
}

let todoCount = todoList.length;

function onAddTodoButtonClick(){
    let userInputElem = document.getElementById("todoUserInput");
    let userInputValue = userInputElem.value;

    if (userInputValue === ""){
        alert("Enter valid text");
        return;
    }
    
    todoCount += 1;
    let newTodo = {
        text : userInputValue,
        uniqueNo : todoCount
    }
    createandAppendTodoItem(newTodo);
    userInputElem.value = "";
}


let addTodoButton = document.getElementById("addTodoButton");

addTodoButton.onclick = function(){
    onAddTodoButtonClick();
}