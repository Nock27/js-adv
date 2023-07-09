function addItem() {
    let newItemElement = document.getElementById('newItemText').value;
    let itemsElement = document.getElementById('items');
    let newItem = document.createElement('li');
    newItem.textContent = newItemElement;
    itemsElement.appendChild(newItem);
}