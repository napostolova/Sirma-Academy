function insertRow() {
    event.preventDefault();

    let tableElement = document.querySelector('#sampleTable>tbody');

    let rowNumber = tableElement.children.length;

    let firstTd = document.createElement('td');
    firstTd.textContent = `Row${rowNumber + 1} cell1`;
    let secondTd = document.createElement('td');
    secondTd.textContent = `Row${rowNumber + 1} cell2`;

    let newRow = document.createElement('tr');
    newRow.appendChild(firstTd);
    newRow.appendChild(secondTd);

    tableElement.appendChild(newRow);
}