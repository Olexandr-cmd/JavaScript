// // - створити функцію яка виводить масив
// let a = [1, 2, 3, 4, 5, 6,];
// function b(arr){
//     console.log(arr);
//     for (const number of arr) {
//         console.log(number);
//     }
//  }
// b(a);
// - створити функцію яка заповнює масив рандомними числами та виводить його.
// function start (lenght, min, max){
//     let arr = [];
//     for (let i = 0; i < lenght; i++) {
//         arr.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return arr
// }
// console.log(start(10,10,100));

// Для виведення використати попвередню функцію.
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function start (lenght, min, max){
//     let arr = [];
//     for (let i = 0; i < lenght; i++) {
//         arr.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return Math.min(...arr);
// }
// console.log(start(3,10,100));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function start (lenght, min, max){
//     let arr = [];
//     for (let i = 0; i < lenght; i++) {
//         arr.push(Math.floor(Math.random()*(max-min)+min));
//     }
//     return Math.max(...arr);
// }
// console.log(start(3,10,100));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function start (){
//     console.log(Math.max(...arguments));
//     return Math.min(...arguments);
// }
// start(3, 4, 78, 123, 100);

// - створити функцію яка виводить масив
// let a = [1, 2, 3, 4, 5, 6,];
// function b(arr){
//     console.log(arr);
//     for (const number of arr) {
//         console.log(number);
//     }
//  }
// b(a);

// - створити функцію яка повертає найбільше число з масиву
// let array = [];
// for (let i = 0; i < 10; i++) {
//    array.push(Math.floor(Math.random()*643))
// }
// function a (){
//     return Math.max(...array);
// }
// console.log(a());

// - створити функцію яка повертає найменьше число з масиву
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(Math.floor(Math.random()*643))
// }
// function a (){
//     return Math.min(...array);
// }
// console.log(a());

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function a(array){
//     let sum = 0;
//     for (const arrElement of array) {
//         sum += arrElement
//     }
//     return sum
// }
// const b = a([2, 4, 6, 8]);
// console.log(b)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function a(array){
//     let sum = 0;
//     for (const arrElement of array) {
//         sum += arrElement
//     }
//     return sum/array.length;
// }
// const b = a([3, 3, 5, 7]);
// console.log(b);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
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
// function start(arrayObj) {
//     let item = 0;
//     for (const user of arrayObj) {
//         if (typeof user === 'object'){
//             item++;
//         }
//     }
//     return item;
// }const number = start(users);
// console.log(number);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
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
// function start(arrayObj){
//     let a = 0;
//     for (const item of arrayObj) {
//         if (typeof item === 'object'){
//             for (const itemKey in item) {
//                 a++;
//             }
//         }
//     }return a
// }
// const number = start(users);
// console.log(number);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function array(array1,array2){
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }return result
// }
// const split = array([1,2,3,4], [2,3,4,5]);
// console.log(split);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = [21, 43, 54, 1, 73, 2, 10];
// function start(array, i){
//     if(i < array.length-1){
//         array[i] = array[i+1];
//     }
//      return array
// }
// console.log(start(array,5));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [0,0,1,0];
// function start(array){
//     let a = 0;
//     for (let i = 0; i < array.length-a; i++) {
//
//         if (array[i] === 0){
//          array.push(...array.splice(i, 1));
//          i--;
//          a+=1;
//         }
//     }return array
// }
// console.log(start(array))

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function start(massage){
//  let div = document.createElement('div');
//  div.innerText = massage;
//     document.body.appendChild(div);
// }
// start('hello owu');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function start(massage, typeTag){
//     let tag = document.createElement(typeTag);
//     tag.innerText = massage;
//     document.body.appendChild(tag);
// }
// start('hello world', 'h1');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
//
// function start(cars){
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     const myId = document.getElementById('wrap')
//     const div = document.createElement("div");
//
//     div.innerText = `Марка: ${car.name} Років: ${car.old} Модель: ${car.model} Колір: ${car.color}
//      Потужність: ${car.power}`;
//     myId.appendChild(div)
//
// }}
// start( [ {
//     name: 'mercedes',
//     old: 3,
//     model: 'S-class',
//     color: 'black',
//     power: 550,
// },  {
//     name: 'BMW',
//     old: 2,
//     model: 'M-5',
//     color: 'red',
//     power: 700,
// },   {
//     name: 'Audi',
//     old: 3,
//     model: 'A-5',
//     color: 'blue',
//     power: 600,
// },    {
//     name: 'Volkswagen',
//     old: 5,
//     model: 'golf',
//     color: 'white',
//     power: 300,
// }, {
//     name: 'hyundai',
//     old: 4,
//     model: 'solaris',
//     color: 'pink',
//     power: 250,
// }],);


// - приймає масив автомобілів (можна взяти з попередніх дз ),та
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function start(cars){
//     for (let i = 0; i < cars.length; i++) {
//         const car = cars[i];
//         const myId = document.getElementById('wrap')
//         const div = document.createElement("div");
//         const ul = document.createElement('ul');
//         const li1 = document.createElement('li');
//         const li2 = document.createElement('li');
//         const li3 = document.createElement('li');
//         const li4 = document.createElement('li');
//
//         div.innerText = `Марка ${car.name}`;
//         ul.innerText = 'Характеристики';
//         li1.innerText = `old ${car.old}`;
//         li2.innerText = `model ${car.model}`;
//         li3.innerText = `color ${car.color}`;
//         li4.innerText = `power ${car.power}`;
//
//         myId.appendChild(div);
//         div.appendChild(ul);
//         ul.appendChild(li1);
//         ul.appendChild(li2);
//         ul.appendChild(li3);
//         ul.appendChild(li4);
//     }}
// start( [ {
//     name: 'mercedes',
//     old: 3,
//     model: 'S-class',
//     color: 'black',
//     power: 550,
// },  {
//     name: 'BMW',
//     old: 2,
//     model: 'M-5',
//     color: 'red',
//     power: 700,
// },   {
//     name: 'Audi',
//     old: 3,
//     model: 'A-5',
//     color: 'blue',
//     power: 600,
// },    {
//     name: 'Volkswagen',
//     old: 5,
//     model: 'golf',
//     color: 'white',
//     power: 300,
// }, {
//     name: 'hyundai',
//     old: 4,
//     model: 'solaris',
//     color: 'pink',
//     power: 250,
// }],);


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто
// з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId =
//             [{id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true},
//             {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId =
//             [{user_id: 3, country: 'USA', city: 'Portland'},
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'},
//             {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
// function start(userWithId, citiesWithId){
//     let array = []
//     for (let i = 0; i < userWithId.length; i++) {
//         for (let j = 0; j < citiesWithId.length; j++) {
//             if (userWithId[i].id === citiesWithId[j].user_id){
//                 let x = (Object.assign(userWithId[i],citiesWithId[j]))
//                 array.push(x);
//                 break
//             }
//         }
//     }return array
// }
// console.log(start(usersWithId, citiesWithId));

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив,
// та робить з кожне правило в окремомублоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// function start(rules){
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
//     return wrap
// }
// console.log(start(rules))