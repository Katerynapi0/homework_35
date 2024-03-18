'use strict';

function displayData(){
    let form = document.getElementById("registrationForm");
let userDataDiv = document.getElementById("userData");
//Отримання значень форми
let firstName = form.elements["firstName"].value;
let lastName = form.elements["lastName"].value;
let birthday = form.elements["birthday"].value;
let gender = form.elements["gender"].value;
let city = form.elements["city"].value;
let address = form.elements["address"].value;
let languages = [];
let languageCheckboxes = form.elements["languages"];
for(let i = 0; i < languageCheckboxes.length; i++){
    if(languageCheckboxes[i].checked){
        languages.push(languageCheckboxes[i].value)
    }
}
//Створення таблиці з даними, що надав в форму користувач
let table = "<h2>Дані користувача:</h2><table>";
table += "<tr><th>Ім'я</th><td>" + firstName + "</td></tr>";
table += "<tr><th>Призвіще</th><td>" + lastName + "</td></tr>";
table += "<tr><th>Дата народження</th><td>" + birthday + "</td></tr>";
table += "<tr><th>Стать</th><td>" + gender + "</td></tr>";
table += "<tr><th>Місто</th><td>" + city + "</td></tr>";
table += "<tr><th>Адреса</th><td>" + address + "</td></tr>";
table += "<tr><th> Мови, якими володіє</th><td>" + languages.join(", ") + "</td></tr>";
table += "</table>";

//Відображення таблиці з даними, що ввів користувач
userDataDiv.innerHTML = table;
}