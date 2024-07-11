function createItem() {
    let items = document.querySelector('#items');
    let newItem = document.createElement('li');

    let itemOutput = document.querySelector('input[name=item]');
    newItem.innerHTML = itemOutput.value;
    items.appendChild(newItem);

    itemOutput.value = "";
}