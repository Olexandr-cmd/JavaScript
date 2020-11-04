// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
// let dog = {
//     name: 'sam',
//     age: 5,
//     son: false,
//     wife: true,
//     legs: 3,
// }
// let man = {
//     name: 'oleg',
//     age: 24,
//     son: true,
//     wife: false,
//     money: 400000,
// }
// let car = {
//     model: 'bmw',
//     age: 3,
//     wheels: 4,
//     from: 'germany',
//     color: 'black'
// }
// // let apartment = {
// //     rooms: 4,
// //     doors: true,
// //     window: 'four',
// //     bed: false,
// //     table: 3,
// // }
// // let book = {
// //     color: 'red',
// //     age: 12,
// //     pages: 314,
// //     rating: 9,
// //     interesting: true,
// // }


// // -- Створити масив та вивести його в консоль:
// //     - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
// let array = [];
// for (let i = 0; i < 5; i++) {
//     array.push(dog, man, car);
//
// }
// console.log(array);
//

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
// let house = {
//     room: 4,
//     color: 'white',
//     toilet:{
//         color: 'green',
//         bowl: true,
//     },
//     windows: true,
//     myRoom: ['big', 1, 'bed'],
// }
// let driver = {
//     name: 'yura',
//     age: 54,
//     son:{
//         name: 'max',
//         age: 23,
//     },
//     car: true,
//     wife: ['ira', 45, 'age'];
// }
// let joy = {
//     color: 'green',
//     age: 1,
//     which:{
//         material: 'cloth',
//     },
//     eyes: true,
//     become: ['girl'],
// }
// let table = {
//     color: 'yellow',
//     legs: [true, 4],
//     width: 140,
//     height: 60,
//     from:{
//         country: 'СРСР',
//     },
// }
// let bag = {
//     color: 'black',
//     pocket: true,
//     from: {
//         country: 'italy',
//     },
//     age: 4,
//     size: ['height', 40, 'width', 20],
// }
//

// Дан масив:
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// for (let user of users) {
//     if (user.name === 'andrey')
//     {console.log(user.status);
//     break;
//     }
// }
//- статус Максима
// for (let user of users) {
//     if (user.name === 'max')
//     {console.log(user.status);
//     break;
//     }
// }
//- ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);
//
//- ім'я третього об'єкта
// console.log(users[2].name);
//
//- вік Олега
// for (let user of users) {
//     if (user.name === 'oleg'){
//         console.log(user.age);
//     break}
// }
//
//- вік Олі
// for (let user of users) {
//     if (user.name === 'olya'){
//         console.log(user.age);
//     }
// }
//
//- вік + ім'я 5го об'єкта
// console.log(users[4].age +" "+ users[4].name);
//
//- вік + сатус Анни
// console.log(users[5].age +" "+ users[5].status);


//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let text = document.getElementById('content');
// console.log(text);
//
// - отримує текст з блоку з id "rules"
// let text = document.getElementById('rules');
// console.log(text);
//
//- замініть текст параграфа з id 'content' на будь-який інший
// let text = document.getElementById('content');
// text.innerText = 'Бійцівський клуб';
// console.log(text);
//
//- замініть текст параграфа з id 'rules' на будь-який інший
// let text = document.getElementById('rules');
// text.innerText = 'Ніяких правил';
// console.log(text);
//
//- змініть кожному елементу колір фону на червоний
// let element = document.getElementsByClassName('fc_rules');
// for (const elem of element) {
//     elem.style.backgroundColor = '#ff0000';
// }
// let elem = document.getElementById('rules');
// elem.style.backgroundColor = '#ff0000';
// let el = document.getElementById('content');
// el.style.backgroundColor = '#ff0000';
//
//- змініть кожному елементу колір тексту на синій
// let element = document.getElementsByClassName('fc_rules');
// for (const elem of element) {
//     elem.style.color = '#1535b5';
// }
// let elem = document.getElementById('rules');
// elem.style.color = '#1535b5';
// let el = document.getElementById('content');
// el.style.color = '#1535b5';
//
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let elem = document.getElementById('rules');
// console.log(elem.className);
//
//- отримати всі елементи з класом fc_rules
// let elem = document.getElementsByClassName('fc_rules');
// for (const elemElement of elem) {
//     console.log(elemElement);
// }
//
//- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elem = document.getElementsByClassName('fc_rules');
// for (const elemElement of elem) {
//     elemElement.style.color = '#ff0000';
// }

//Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let text = document.getElementById('main_header');
// text.style.color = '#ffff00';
//
//-- робить шириниу елементу ul 400 пікселів
// let text = document.getElementsByTagName('ul');
// for (const textElement of text) {
//     textElement.style.width = '400px';
// console.log(textElement);
// }
//
//-- робить шириниу всіх елементів з класом linkList шириною 50%
// let text = document.getElementsByClassName('linkList');
// for (const textElement of text) {
//     textElement.style.width = '50%';
//     console.log(textElement);
// }
//
//-- отримує текст який зберігається в елементі з класом listElement2
// let text = document.getElementsByClassName('listElement2');
// for (const textElement of text) {
//     console.log(textElement);
// }
//
//-- отримує всі елементи li та змінює ім колір фону на сірий
// let text = document.getElementsByTagName('li');
// for (const textElement of text) {
//     textElement.style.backgroundColor = '#3e3d3d'
// }
//
// -- отримує всі елементи 'a' та додає їм клас anchor
// let text = document.getElementsByTagName('a');
// for (const textElement of text) {
//     textElement.classList.add('anchor');
//     console.log(textElement);
// }


