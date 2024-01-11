function addItemToList(text) {
    const ul = document.getElementById("list");

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(text));

    ul.appendChild(li);
}

function createList() {
    while (true) {
        const userInput = prompt("Введите содержимое пункта списка:");

        if (userInput === null || userInput === "") {
            break;
        }

        addItemToList(userInput);
    }
}

window.onload = createList;