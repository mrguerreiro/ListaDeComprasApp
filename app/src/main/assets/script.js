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
        document.getElementById('shopping-list').appendChild(listItem);

        // Limpa o campo de entrada
        itemInput.value = "";
        itemInput.focus();
    } else {
        alert("Por favor, digite um item.");
    }
}

// Função para limpar a lista (agora fora da função addItem)
function clearList() {
    const shoppingList = document.getElementById('shopping-list');

    // Remove todos os itens da lista
    shoppingList.innerHTML = "";
}
