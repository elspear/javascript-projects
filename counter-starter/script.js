const add = (step) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
};

const subtract = (step) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

const reset = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = "0";
}

const addCustom = () => {
    let customInput = document.getElementById("customNumber");
    let customValue = parseInt(customInput.value);

    // check input is valid
    if (isNaN(customValue) || customValue <= 0) {
        alert("Please enter a valid positive number");
        return;
    }

    add(customValue);
    customInput.value = ""; // clear input after use
}

const subtractCustom = () => {
    let customInput = document.getElementById("customNumber");
    let customValue = parseInt(customInput.value);

    if (isNaN(customValue) || customValue <= 0) {
        alert("Please enter a valid number");
        return;
    }

    subtract(customValue);
    customInput.value = "";
}