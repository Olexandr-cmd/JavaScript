// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
// let obj = {
//     name: 'yura',
//     old: 10,
//     color: 'white',
// }
// let obj2 = {
//     from: 'Ukraine',
//     study: true,
//     fon: 'black',
//
// }
// let obj3 = {
//     model: 'BMW',
//     type: 'sport',
//     comfortable: true,
// }
// let obj4 = {
//     phone: 'samsung',
//     price: 30000,
//     made: 'china',
// }
// let obj5 = {
//     house: 'big',
//     rooms: true,
//     window: 4,
// }

//- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект.Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] ,
// wife: { name: 'cherry' } };
//
// let man = {
//     name: 'vasya',
//     skills: ['phyton', 'html'],
//     girl: {
//         name: 'anna',
//     },
// };
// let phone = {
//     producer: 'iphone',
//     made: ['china', 'usa'],
//     modelsPrice:{
//         iPhoneX: 20000,
//         iPhoneXs: 25000,
//     },
// };
// let car = {
//    brand: 'BMW',
//    type: 'sport',
//    comfortable: [true, true, ],
// };
//

//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let key in obj) {
//     console.log([key]);
// };
// for (let key2 in obj2) {
//     console.log([key2]);
// };
// for (let key3 in obj3) {
//     console.log([key3]);
// };
// for (let key4 in obj4) {
//     console.log([key4]);
// };
// for (let key5 in obj5) {
//     console.log([key5]);
// };
//
// for (let manKey in man) {
//     console.log([manKey]);
// }
// for (let phoneKey in phone) {
//     console.log([phoneKey]);
// }
// for (let carKey in car) {
//     console.log([carKey]);
// }
//

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(man));
// console.log(Object.keys(phone));
// console.log(Object.keys(car));
//

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
//
// let array = [
//     {
//         name: 'mercedes',
//         old: 3,
//         model: 'S-class',
//         color: 'black',
//         power: 550,
//     },
//     {
//         name: 'BMW',
//         old: 2,
//         model: 'M-5',
//         color: 'red',
//         power: 700,
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A-5',
//         color: 'blue',
//         power: 600,
//     },
//     {
//         name: 'Volkswagen',
//         old: 5,
//         model: 'golf',
//         color: 'white',
//         power: 300,
//     },
//     {
//         name: 'hyundai',
//         old: 4,
//         model: 'solaris',
//         color: 'pink',
//         power: 250,
//     },
// ]
// console.log(array);

//     - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
// let cities = [
//     {
//         name: 'Amsterdam',
//         people: 900000,
//         country: 'Netherlands',
//         comfortable: true,
//     },
//     {
//         name: 'Moscow',
//         people: 20000000,
//         country: 'Russia',
//         comfortable: false,
//     },
//     {
//         name: 'New-York',
//         people: 5000000,
//         country: 'USA',
//         comfortable: true,
//     },
//     {
//         name: 'Krakow',
//         people: 1400000,
//         country: 'Poland',
//         comfortable: true,
//     },
//     {
//         name: 'Paris',
//         people: 5600000,
//         country: 'France',
//         comfortable: true,
//     },
// ];
// console.log(cities);

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let arr = [
//     {
//         name: 'mercedes',
//         old: 3,
//         model: 'S-class',
//         color: 'black',
//         power: 550,
//         driver:{
//             name: 'stepan',
//             age: 43,
//             sex: 'man',
//             experience: 20,
//         }
//     },
//     {
//         name: 'BMW',
//         old: 2,
//         model: 'M-5',
//         color: 'red',
//         power: 700,
//         driver:{
//             name: 'oleg',
//             age: 33,
//             sex: 'man',
//             experience: 10,
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A-5',
//         color: 'blue',
//         power: 600,
//         driver:{
//             name: 'maria',
//             age: 23,
//             sex: 'girl',
//             experience: 2,
//         }
//     },
//     {
//         name: 'Volkswagen',
//         old: 5,
//         model: 'golf',
//         color: 'white',
//         power: 300,
//         driver:{
//             name: 'dima',
//             age: 21,
//             sex: 'man',
//             experience: 1,
//         }
//     },
//     {
//         name: 'hyundai',
//         old: 4,
//         model: 'solaris',
//         color: 'pink',
//         power: 250,
//         driver:{
//             name: 'anna',
//             age: 27,
//             sex: 'girl',
//             experience: 7,
//         }
//     },
// ]
// console.log(arr);

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < array.length){
//     console.log(array[i]);
//     i++
// };
// let i1 = 0;
// while(i1 < arr.length){
//     console.log(arr[i1]);
//     i1++
// };
// let i2 = 0;
// while(i2 < cities.length){
//     console.log(cities[i2]);
//     i2++
// };

//- проитерировать каждый массив из задания 5,6,7 при помощи for
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };
// for (let i2 = 0; i2 < cities.length; i2++) {
//     console.log(cities[i2]);
// };
// for (let i3 = 0; i3 < arr.length; i3++) {
//     console.log(arr[i3]);
// };
//

//- проитерировать каждый массив из задания 5,6,7 при помощи  for of
// for (const arrayElement of array) {
//     console.log(arrayElement);
// };
// for (const city of cities) {
//     console.log(city);
// };
// for (const arrElement of arr) {
//     console.log(arrElement);
// };
//

// - взять объекты из задания 1 и превратить каждый в json.
// let a = JSON.stringify(obj);
// console.log(a);
// let a2 = JSON.stringify(obj2);
// console.log(a2);
// let a3 = JSON.stringify(obj3);
// console.log(a3);
// let a4 = JSON.stringify(obj4);
// console.log(a4);
// let a5 = JSON.stringify(obj5);
// console.log(a5);


//- взять json из задания 11 и превратить их обратно в объекты.
// let b = JSON.parse(a);
// console.log(b);
// let b2 = JSON.parse(a2);
// console.log(b2);
// let b3 = JSON.parse(a3);
// console.log(b3);
// let b4 = JSON.parse(a4);
// console.log(b4);
// let b5 = JSON.parse(a5);
// console.log(b5);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json
// for (const arrayElement of array) {
//     let a = JSON.stringify(arrayElement);
//     console.log(a);
// }
//

//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const city of cities) {
//     let b = JSON.stringify(city);
//     console.log(b);
// }

//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// for (const arrElement of arr) {
//     let d =[]
//     let c = JSON.stringify(arrElement);
//     d.push(c);
//     console.log(d);
// }

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//         name: 'one',
//         age: 43,
//         skills:[
//             'scram', 'c++', 'html'
//         ],
//     },
//     {
//        name: 'two',
//        age: 44,
//        skills: [
//            'java', 'phyton'
//        ],
//     },
//     {
//         name: 'three',
//         age: 33,
//         skills: [
//             'javascript', 'assembler', 'php'
//         ],
//     },
// ];
// for (const user of users) {
//     for (const userKey in user) {
//         console.log(user[userKey]);
//     };
// };

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let a = []
// for (const user of users) {
//     a.push(user['skills']);
// }
// console.log(a);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//  {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//  {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//  {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//  {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (const user of users) {
//     for (const elem in user) {
//         console.log(user[elem]);
//     }
// }
//


// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let a = [];
// for (const user of users) {
//     a.push(user['address']);
// }
// console.log(a);
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     let address = '';
//     for (const address1 in user.address) {
//         address = address + " " + user.address[address1];
//     }
//     div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
//     document.body.appendChild(div);
// }
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const h3 = document.createElement('h3');
//     const p1 = document.createElement('p');
//     const p2 = document.createElement('p');
//     const p3 = document.createElement('p')
//     let address = '';
//     for (const address1 in user.address) {
//         address = address + " " + user.address[address1];
//     }
//     h3.innerText = user.name;
//     p1.innerText = user.status;
//     p2.innerText = user.age;
//     p3.innerText = address;
//
//     div.appendChild(h3);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам ,
//     блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement("div");
//     const name = document.createElement('h3');
//     const age = document.createElement('p');
//     const status = document.createElement('p');
//     const address = document.createElement('div');
//     for (const item in user.address) {
//         const temp = document.createElement("div");
//         temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//     }
//
//     name.innerText = user.name;
//     status.innerText = user.status;
//     age.innerText = user.age;
//
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// };
//

//- Дано 2 масиви з рівною кількістю об'єктів.
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id"
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address:
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
//
// }
// console.log(usersWithId);

//створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//
// const text = document.getElementById('content');
// const innerText = text.innerText;
// console.log(innerText);
//
// const  text1 = document.getElementsByClassName('rules');
// for (const text1Element of text1) {
//     console.log(text1Element);
// }
//
// const textTag = document.getElementsByTagName('h2');
// for (const textTagElement of textTag) {
//     console.log(textTagElement);
// }
//
//- змінити цей текст використовуючи селектори id, class,  tag
// const text = document.getElementById('content')
// text.innerText = 'hello world';
// const text2 = document.getElementsByClassName('rules');
// for (const text2Element of text2) {
//     text2Element.innerText = 'Hello people';
// }
// const text3 = document.getElementsByTagName('h2');
// for (const text3Element of text3) {
//         text3Element.innerText = 'bye world';
// }
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// const a = document.getElementById('content');
// a.style.width = '140px';
// a.style.height = '200px';
// const b = document.getElementsByClassName('rules');
// for (const bElement of b) {
//
//     bElement.style.width = '200px';
//     bElement.style.height = '300px';
// }
// const c = document.getElementsByTagName('h2');
// for (const cElement of c) {
//     cElement.style.height = '300px';
//     cElement.style.width = '100px';
//     console.log(cElement);
// }
//
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table = document.createElement('table');
// const tr = document.createElement('tr');
// const td = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');
//
// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);
//
// table.appendChild(tr);
//
// document.body.appendChild(table);
//
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//
//     for (let i = 0; i < 3; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
//
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//
//     for (let i = 0; i < 5; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
//
//
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
// let n = +prompt('Введіть рядки');
// let m = +prompt('Введіть стовпці');
// const table = document.createElement('table');
// for (let i = 0; i < n; i++) {
//     const tr = document.createElement('tr');
//
//     for (let i = 0; i < m; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
//
//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
// const one =  document.getElementsByTagName('*');
// for (const tag of one) {
//     if (tag.getAttribute('class')){
//         console.log(tag);
//     }
// }
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// const one = document.getElementsByTagName('p');
// for (const tag of one) {
//         tag.innerText = 'hello oktenweb';
// }
// - знайти всі div та змінити ім колір на червоний
// const one = document.getElementsByTagName('div');
// for (const tag of one) {
//       tag.style.color = '#ff0000';
// }


// CLASS
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// const a = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const ul = document.createElement('ul');
// for (const h2 of a) {
//     const li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);
//
//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// const wrap = document.createElement('div');
// wrap.id = 'wrap';
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     div.className = `rules rule${i+1}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//
//     wrap.appendChild(div);
// }
// document.body.appendChild(wrap);