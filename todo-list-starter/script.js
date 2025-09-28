let todoTasks = ["Walk Hugo", "Make dinner"];
let todoTaskStatus = [false, true];
let todoTaskImportant = [false, true]; //track important tasks


const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTaskStatus.push(false);
        todoTaskImportant.push(false); // new tasks marked as not important
        newTask.value = "";
        updateTodoList();
    }

};

const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }

};

const createNewTodoItemElement = (task, index) => {
    // create <p> element to store task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // apply a CSS value to completed items
    if (todoTaskStatus[index] === true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    // apply a CSS value to important items
    if (todoTaskImportant[index] === true) {
        newTodoTaskTextElement.classList.add("important");
    };

    // create <li> element to contain the <p>
    const newToDoTaskElement = document.createElement("li");
    newToDoTaskElement.appendChild(newTodoTaskTextElement);

    // adding a button to mark each item as complete
    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newToDoTaskElement.appendChild(completeButtonElement);

    // button to mark importance
    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "important";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newToDoTaskElement.appendChild(importantButtonElement);

    return newToDoTaskElement;

};

const toggleComplete = (index) => {
    if (todoTaskStatus[index] === false) {
        todoTaskStatus[index] = true;
    } else {
        todoTaskStatus[index] = false;
    }
    updateTodoList();
};

const toggleImportant = (index) => {
    todoTaskImportant[index] = !todoTaskImportant[index];
    updateTodoList();
}

updateTodoList();




