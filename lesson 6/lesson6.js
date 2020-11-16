// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// let numbers = [23, 34, 654, 72, 12, 24, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 109, 13, 27];
// let sort = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let numbers = [23, 34, 654, 72, 12, 24, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 109, 13, 27];
// let sort = numbers.sort((a, b) => {
//     return b - a;
// })
// console.log(sort);

// -- при помощи filter получить числа кратные 3
// let numbers = [23, 34, 654, 72, 12, 24, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 109, 13, 27];
// let filter = numbers.filter(value => value % 3 === 0 && value !== 0);
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let numbers = [23, 34, 654, 72, 12, 200, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 110, 13, 27];
// let filter = numbers.filter(value => value % 10 === 0 && value !== 0);
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// let numbers = [23, 34, 654, 72, 12, 200, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 110, 13, 27];
// let foreach = numbers.forEach(value =>{
//     console.log(value);
// } );

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let numbers = [23, 34, 654, 72, 12, 200, 53, 23, 12, 1, 2, 5, 6, 8, 9, 65, 83, 110, 13, 27];
// let map = numbers.map(value => {
//     return value * 3;
// });
// console.log(map);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// let array = ['hello', 'vika', 'anna', 'stop', 'world', 'bad', 'vasya', 'olya', 'max', 'masha', 'blue', 'red', 'black',
//     'bye', 'finish'];
// let sort = array.sort()
// console.log(sort);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let array = ['hello', 'vika', 'anna', 'stop', 'world', 'bad', 'vasya', 'olya', 'max', 'masha', 'blue', 'red', 'black',
//     'bye', 'finish'];
// let sort = array.sort((a, b) => {
//     if (a > b) return -1
//     })
// console.log(sort);
// -- отфильтровать слова длиной менее 4х символов
// let array = ['hello', 'vika', 'anna', 'stop', 'world', 'bad', 'vasya', 'olya', 'max', 'masha', 'blue', 'red', 'black',
//     'bye', 'finish'];
// let filter = array.filter(value => value.length < 4);
// console.log(filter);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let array = ['hello', 'vika', 'anna', 'stop', 'world', 'bad', 'vasya', 'olya', 'max', 'masha', 'blue', 'red', 'black',
//     'bye', 'finish'];
// let map = array.map(value => {
//     value = value + '!';
//     return value;
// })
// console.log(map);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [
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
//     {name: 'max', age: 31, status: true} ];
// console.log(users);
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let newUsers = users.sort((a, b) => a.age - b.age);
// console.log(newUsers);
// //
//let newUsers = users.sort((a, b) => b.age - a.age);
// console.log(newUsers);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let newUsers = users.sort((a, b) => a.name.length - b.name.length);
// console.log(newUsers);
//
//let newUsers = users.sort((a, b) => b.name.length - a.name.length);
// console.log(newUsers);
// -пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newUser = users.map((user, index) =>{
//     user.id = Math.round(Math.random()*74)
//     return user;
// } )
// console.log(newUser);
// - відсортувати його за індентифікатором
// let sortNewUser = newUser.sort((a, b) => a.id - b.id);
// console.log(sortNewUser);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// console.log(cars);
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let filterCars = cars.filter(value => {
//     if (value.volume >= 3){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - двигун = 2л
// let filterCars = cars.filter(value => {
//     if (value.volume === 2){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - виробник мерс
// let filterCars = cars.filter(value => {
//     if (value.producer === "mercedes"){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - двигун більше 3х літрів + виробник мерседес
// let filterCars = cars.filter(value => {
//     if (value.producer === "mercedes" && value.volume >= 3){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - двигун більше 3х літрів + виробник субару
// let filterCars = cars.filter(value => {
//     if (value.producer === "subaru" && value.volume >= 3){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - сили більше ніж 300
// let filterCars = cars.filter(value => {
//     if (value.power > 300){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - сили більше ніж 300 + виробник субару
// let filterCars = cars.filter(value => {
//     if (value.producer === "subaru" && value.power > 300){
//         return value;
//     }
//
// })
// console.log(filterCars);
// - мотор серіі ej
// let filterCars = cars.filter(value => {
//     if (value.engine.startsWith('ej') ){
//         return value;
//     }
// })
// console.log(filterCars);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filterCars = cars.filter(value => {
//     if (value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru'){
//         return value;
//     }
// })
// console.log(filterCars);
// - двигун меньше 3х літрів + виробник мерседес
// let filterCars = cars.filter(value => {
//     if (value.volume < 3 && value.producer === "mercedes"){
//         return value;
//     }
// })
// console.log(filterCars);
// - двигун більше 2л + сили більше 250
// let filterCars = cars.filter(value => {
//     if (value.volume >= 2 && value.power > 250){
//         return value;
//     }
// })
// console.log(filterCars);
// - сили більше 250  + виробник бмв
// let filterCars = cars.filter(value => {
//     if (value.producer === 'bmw' && value.power > 250){
//         return value;
//     }
// })
// console.log(filterCars);
//

// - взять слдующий массив
// let usersWithAddress =
// [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// console.log(usersWithAddress);
// -- отсортировать его по id пользователей
// let sortUsers = usersWithAddress.sort((a, b) => a.id - b.id);
//
// console.log(sortUsers);
// -- отсортировать его по id пользователей в обратном опрядке
// let sortUsers = usersWithAddress.sort((a, b) => b.id - a.id);
//
// console.log(sortUsers);
// -- отсортировать его по возрасту пользователей
// let sortUsers = usersWithAddress.sort((a, b) => a.age - b.age);
//
// console.log(sortUsers);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortUsers = usersWithAddress.sort((a, b) => b.age - a.age);
//
// console.log(sortUsers);
// -- отсортировать его по имени пользователей
// let sortUsers = usersWithAddress.sort( (a, b) => {
//         let nameA = a.name;
//         let nameB = b.name;
//         if (nameA < nameB) {
//             return -1;
//         }
//     });
// console.log(sortUsers);
// -- отсортировать его по имени пользователей в обратном порядке
// let sortUsers = usersWithAddress.sort( (a, b) => {
//     let nameA = a.name;
//     let nameB = b.name;
//     if (nameA > nameB) {
//         return -1;
//     }
// });
// console.log(sortUsers);
// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortUsers = usersWithAddress.sort( (a, b) => {
//     let streetA = a.address.street.toLowerCase();
//     let streetB = b.address.street.toLowerCase();
//     if (streetA < streetB) {
//         return -1;
//     }
//     if (streetA > streetB){
//         return 1;
//     }
//     return 0
// });
// console.log(sortUsers);

// -- отсортировать его по номеру дома по возрастанию
// let sortUsers = usersWithAddress.sort( (a, b) => {
//     let numberA = a.address.number;
//     let numberB = b.address.number;
//     if (numberA < numberB) {
//         return -1;
//     }
//     if (numberA > numberB){
//         return 1;
//     }
//     return 0
// });
// console.log(sortUsers);
// -- отфильтровать (оставить) тех кто младше 30
// let filterUsers = usersWithAddress.filter(value => value.age < 30);
// console.log(filterUsers);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filterUsers = usersWithAddress.filter(value => value.status === false);
// console.log(filterUsers);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filterUsers = usersWithAddress.filter(value => value.age < 30 && value.status === false);
// console.log(filterUsers);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let filterUsers = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(filterUsers);
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
//     (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
//     та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв.
// Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let cars = [
//     {producer:"subaru",year: 1998,owner:{name: 'Vasya', age: 34, experience: 3},power: 140, price: 3000},
//     {producer:"subaru",year: 2014,owner:{name: 'Yura', age: 31, experience: 6},power: 200,price: 6000},
//     {producer:"subaru",year: 2014,owner:{name: 'Arnold', age: 54, experience: 2},power: 165,price: 8500},
//     {producer:"bmw",year: 2013,owner:{name: 'Stepan', age: 66, experience: 3},power: 120,price: 7600},
//     {producer:"bmw",year: 2010,owner:{name: 'Garik', age: 29, experience: 7},power: 120,price: 10000},
//     {producer:"mercedes",year: 1990,owner:{name: 'Oleg', age: 48, experience: 19},power: 180,price: 2600},
//     {producer:"mercedes",year: 2017,owner:{name: 'Kolya', age: 39, experience: 9},power: 400,price: 24000},
//     {producer:"mercedes",year: 2017,owner:{name: 'Artur', age: 37, experience: 16},power: 230,price: 36000} ];
// let newOwner = [
//     {owner:{name: 'Roma', age: 24, experience: 2}},
//     {owner:{name: 'Victor', age: 27, experience: 6}},
//     {owner:{name: 'Dima', age: 19, experience: 1}},
//     {owner:{name: 'Ostap', age: 31, experience: 5}},];
// console.log(cars);
//
// for (let i = 0; i < cars.length; i+=2) {
//       if (i !== 0){
//           cars[i].owner = newOwner[i/2].owner;
//       }
//     else {
//           cars[i].owner = newOwner[i].owner;
//       }
//    cars[i].power += cars[i].power / 10;
//     console.log(cars[i]);
// }
//
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].power += cars[i].power / 10;
//     cars[i].price += cars[i].price / 20;
//     console.log(cars[i]);
// }
//
// let sortCars = cars.sort(a => {
//     if (a.owner.experience <= 5 && a.year >= 25){
//         a.owner.experience += 1;
//     }
// });
// console.log(sortCars);
//
// let price = cars.reduce((acc, value) => {
//     return acc + value.price
// },0);
// console.log(price);
