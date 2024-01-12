function submitForm() {
    // Отримання значень з форми
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Отримання оператора з номеру телефону
    var operator = getOperator(phoneNumber);

    // Створення нового рядка для таблиці
    var tableRow = document.createElement('tr');
    tableRow.innerHTML = '<td>' + fullName + '</td><td>' + phoneNumber + '</td><td>' + operator + '</td>';

    // Додавання рядка у таблицю
    document.getElementById('outputTable').appendChild(tableRow);

    // Створення нового елемента для списку
    var listItem = document.createElement('li');
    listItem.textContent = ' П.І.Б: ' + fullName + 'Номер телефону: ' + phoneNumber +  ', Оператор: ' + operator;

    // Додавання елемента у список
    document.getElementById('outputList').appendChild(listItem);
}

function getOperator(phoneNumber) {
    // Приклад: припускається, що оператор можна визначити за першими трема цифрами номеру телефону
    var prefix = phoneNumber.substring(0, 3);

    switch (prefix) {
        case '066':
            return 'Водафон';
        case '095':
            return 'Водафон';
        case '050':
            return 'Водафон';
        case '099':
            return 'Водафон';
        case '063':
            return 'Лайфсел';
        case '073':
            return 'Лайфсел';
        case '093':
            return 'Лайфсел';
        case '067':
            return 'Київстар';
        case '098':
            return 'Київстар';
        case '068':
            return 'Київстар';
        case '096':
            return 'Київстар';
        case '097':
            return 'Київстар';


    }
}
