let shoppingListItems = [];

const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    document.getElementById("new-item-text").value = ""; // Clear the input field
    updateItems();
}

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

updateItems();

const clearList = () => {
    shoppingListItems = [];
    updateItems();
}