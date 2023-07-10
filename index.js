//=================HW21==================
// посилання на форму
const form = document.getElementById('form');
//  посилання на таблицю
const table = document.getElementById('table');

// Обробник події submit форми
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // значення полів форми
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const languages = [];
  const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
  languageCheckboxes.forEach(function(checkbox) {
    languages.push(checkbox.value);
  });

  // Додаємо рядки з даними
  addTableRow(table, 'Ім\'я', firstName);
  addTableRow(table, 'Прізвище', lastName);
  addTableRow(table, 'Дата народження', birthdate);
  addTableRow(table, 'Стать', gender);
  addTableRow(table, 'Місто', city);
  addTableRow(table, 'Адреса', address);
  addTableRow(table, 'Мови, якими володієте', languages.join(', '));

  // Очищаємо форму та додаємо таблицю
  form.innerHTML = '';
  form.appendChild(table);


// Функція для додавання рядка до таблиці
function addTableRow(table, label, value) {
  const row = table.insertRow();
  const labelCell = row.insertCell();
  const valueCell = row.insertCell();
  labelCell.textContent = label;
  valueCell.textContent = value;
}}
);

// Метод HTMLTableRowElement.insertCell()вставляет новую ячейку ( <td>) в строку таблицы ( <tr>) и возвращает ссылку на ячейку.
// Метод HTMLTableElement.insertRow()добавляет новую строку в таблицу и возвращает на неё ссылку.