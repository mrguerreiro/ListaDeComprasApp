function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value;

    if (itemText.trim() !== "") {
        // Cria um novo elemento <li>
        const listItem = document.createElement('li');

        // Cria o checkbox
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Cria o span com o nome do item
        const span = document.createElement('span');
        span.textContent = itemText;

        // Adiciona o checkbox e o span dentro do label
        label.appendChild(checkbox);
        label.appendChild(span);

        // Adiciona o label ao item da lista
        listItem.appendChild(label);

        // Adiciona o item à lista de compras
        const shoppingList = document.getElementById('shopping-list');
        shoppingList.appendChild(listItem);

        // Salva no Local Storage
        saveToLocalStorage();

        // Limpa o campo de entrada
        itemInput.value = "";
        itemInput.focus();
    } else {
        alert("Por favor, digite um item.");
    }
}

function loadFromLocalStorage() {
    const shoppingList = document.getElementById('shopping-list');
    const savedItems = JSON.parse(localStorage.getItem('shoppingList')) || [];

    savedItems.forEach(item => {
        const listItem = document.createElement('li');

        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked;

        const span = document.createElement('span');
        span.textContent = item.text;

        label.appendChild(checkbox);
        label.appendChild(span);
        listItem.appendChild(label);
        shoppingList.appendChild(listItem);
    });
}

function saveToLocalStorage() {
    const shoppingList = document.getElementById('shopping-list');
    const items = Array.from(shoppingList.children).map(listItem => {
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const span = listItem.querySelector('span');
        return { text: span.textContent, checked: checkbox.checked };
    });

    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function clearList() {
    const shoppingList = document.getElementById('shopping-list');
    shoppingList.innerHTML = "";
    localStorage.removeItem('shoppingList');
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
