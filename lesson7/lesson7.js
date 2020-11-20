// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// const btn = document.getElementById('btn');
// const txt = document.getElementById('text');
//
// btn.onclick = ev => {
//     txt.hidden
//     ?txt.hidden = false
//     :txt.hidden = true
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const btn = document.getElementById('btn');
//
// btn.onclick = ev => {
//     btn.hidden
//         ?btn.hidden = false
//         :btn.hidden = true
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// const btn = document.getElementById('it2');
// btn.onclick = ev => {
//     const number = document.getElementById('it1');
//     const value = number.value;
//     if (value < 18 && value > 0){
//         alert('go home')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// const a1 = document.getElementById('a1');
// const menu = document.getElementById('ulMenu');
//
// let click = false;
//
// a1.onclick = ev => {
//     if (click){
//         menu.style.display = 'block';
//         click = false;
//     }else{
//         menu.style.display = 'none';
//         click = true;
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comment = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ];
// comment.forEach(value => {
// const comId = document.getElementById('comment');
// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const btn = document.createElement('button');
//
// btn.innerText = 'GO!';
// h2.innerText = value.title;
// p.innerText = value.body;
//
// btn.onclick = ev => {
//     p.hidden
//     ?p.hidden = false
//     :p.hidden = true
// }
//
// comId.appendChild(div);
// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(btn);
// document.body.appendChild(comId);
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на
// яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn = document.getElementById('myBtn');
// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
// const input3 = document.getElementById('input3')
// const input4 = document.getElementById('input4')
//
// btn.onclick = ev => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const content = document.getElementById('content');
// function createTable(rows,cols,tag){
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//          const tr = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = i.toString() + j.toString();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table);
// }
// createTable(5,6,content)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     {
//         id: 1,
//         img_url: 'image/anime1.jpg'
//     },{
//         id: 2,
//         img_url: 'image/anime2.jpg'
//     }, {
//         id: 3,
//         img_url: 'image/anime3.jpg'
//     }, {
//         id: 4,
//         img_url: 'image/anime4.jpg'
//     }, {
//         id: 5,
//         img_url: 'image/anime5.jpg'
//     }, {
//         id: 6,
//         img_url: 'image/anime6.jpg'
//     },
// ];
// const gallery = document.getElementById('gallery');
// const img = document.createElement('img');
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
//
// btn1.innerText = 'Left';
// btn2.innerText = 'Right';
// let index = 0;
// img.height = 400;
// img.width = 600;
//
// img.src = imgArray[index].img_url;
// gallery.appendChild(btn1);
// gallery.appendChild(img);
// gallery.appendChild(btn2);
//
//
// btn1.onclick = () => {
//     index - 1 < 0
//         ?index = imgArray.length - 1
//         :index = index - 1
//     img.src = imgArray[index].img_url
// }
// btn2.onclick = () => {
//     index + 1 > imgArray.length - 1
//         ?index = 0
//         :index = index + 1
//     img.src = imgArray[index].img_url
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const arr = ['bitch', 'fuck', 'shit']
// const btn = document.getElementById('it4');
// btn.onclick = ev => {
//     const text = document.getElementById('it3');
//     const value = text.value;
//     for (const string of arr) {
//         if (value === string){
//             alert('shut up')
//         }
//     }
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const arr = ['bitch', 'fuck', 'shit']
// const btn = document.getElementById('it4');
// btn.onclick = ev => {
//     const text = document.getElementById('it3');
//     const value = text.value;
//     for (const string of arr) {
//         if (value.includes(string)){
//             alert('shut up')
//         }
//     }
// }
// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const array = document.getElementsByTagName("h2");
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (let i = 0; i < array.length; i++) {
//    const li = document.createElement('li');
//    const a = document.createElement('a');
//    let value = 'value' + i;
//    a.href = '#' + value;
//    array[i].setAttribute('id', value);
//    a.innerHTML = array[i].innerText;
//    li.appendChild(a);
//    ul.appendChild(li);
// }
// content.appendChild(ul);
//
// content.style.width = '30%';
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left';

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// const content = document.getElementById('content');
// const userDiv = document.createElement('div');
// userDiv.appendChild(renderContent(usersWithAddress));
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
//
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
//
// const button = document.createElement('button');
//
// label1.innerText = 'статус false';
// label2.innerText = 'старше 29';
// label3.innerText = 'город Киев';
//
// button.innerText = 'Filter';
//
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
//
// content.appendChild(userDiv);
//
// content.appendChild(label1);
// content.appendChild(input1);
// content.appendChild(label2);
// content.appendChild(input2);
// content.appendChild(label3);
// content.appendChild(input3);
// content.appendChild(button);
//
// button.onclick = ev => {
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress))
//
//     if (input1.checked) myArray = myArray.filter(value => !value.status);
//     if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
//     if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');
//
//     userDiv.innerHTML = '';
//     userDiv.appendChild(renderContent(myArray))
// }
//
//
// function renderContent(array){
//     const main = document.createElement('div');
//     array.forEach(item => {
//         const div = document.createElement('div');
//         div.innerHTML = JSON.stringify(item);
//
//         main.appendChild(div);
//
// })
//     return main;
// }