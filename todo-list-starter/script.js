let todoTasks = ["feed hugo", "wash dishes"];
let todoTaskStatus = [false, true];
let todoTaskImportant = [false, true]; //track important tasks
let todoTaskDueDates = ["2025-09-30", ""]; //track due dates


const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    const newDate = document.getElementById("new-task-date");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTaskStatus.push(false);
        todoTaskImportant.push(false); // new tasks marked as not important by default
        todoTaskDueDates.push(newDate.value || ""); // add due date or empty string if no due date
        newTask.value = ""; // clear field
        newDate.value = ""; // clear date field
        updateTodoList();
    }
};

// function to open the hidden date picker when calendar button is clicked
const openDatePicker = () => {
    document.getElementById("new-task-date").showPicker();
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
    
    // Add due date to task display if it exists
    const dueDate = todoTaskDueDates[index];
    if (dueDate) {
        const formattedDate = new Date(dueDate).toLocaleDateString();
        newTodoTaskTextElement.innerText = `${task} (Due: ${formattedDate})`;
    } else {
        newTodoTaskTextElement.innerText = task;
    }

    // apply a CSS value to completed items
    // (Complete class now applied to entire li above)

    // apply a CSS value to important items
    if (todoTaskImportant[index] === true) {
        newTodoTaskTextElement.classList.add("important");
    };

    // create <li> element to contain the <p>
    const newToDoTaskElement = document.createElement("li");
    
    // Apply complete class to entire li if completed
    if (todoTaskStatus[index] === true) {
        newToDoTaskElement.classList.add("complete");
    }
    
    // Apply important class to entire li if important
    if (todoTaskImportant[index] === true) {
        newToDoTaskElement.classList.add("important");
    }
    
    // adding a circle to mark each item as complete (ADD FIRST)
    const completeButtonElement = document.createElement("div");
    completeButtonElement.className = "complete-circle";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newToDoTaskElement.appendChild(completeButtonElement);

    // THEN add the task text
    newToDoTaskElement.appendChild(newTodoTaskTextElement);

    // exclamation mark to mark importance
    const importantButtonElement = document.createElement("div");
    importantButtonElement.className = "important-mark";
    importantButtonElement.innerHTML = "!";
    importantButtonElement.onclick = function () {
        toggleImportant(index);
    };
    newToDoTaskElement.appendChild(importantButtonElement);

    // delete button to remove the task
    const deleteButtonElement = document.createElement("div");
    deleteButtonElement.className = "delete-button";
    deleteButtonElement.innerHTML = "×";
    deleteButtonElement.onclick = function () {
        deleteTask(index);
    };
    newToDoTaskElement.appendChild(deleteButtonElement);

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

const deleteTask = (index) => {
    todoTasks.splice(index, 1);
    todoTaskStatus.splice(index, 1);
    todoTaskImportant.splice(index, 1);
    todoTaskDueDates.splice(index, 1);
    updateTodoList();
};

updateTodoList();

const clearList = () => {
    todoTasks = [];
    updateTodoList();
};




