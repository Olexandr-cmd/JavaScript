// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function Tags( titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let a = new Tags('<a>',"Тег <a> является одним из важных элементов" +
//     " HTML и предназначен для создания ссылок.",[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ])
// console.log(a);
//
// let b = new Tags('<div>',"Элемент <div> является блочным элементом и предназначен для" +
//     " выделения фрагмента документа с целью изменения вида содержимого.",[
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ]);
// console.log(b);
//
// let c = new Tags('<h1>',"HTML предлагает шесть заголовков разного уровня," +
//     " которые показывают относительную важность секции, расположенной после заголовка.",[
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ]);
// console.log(c);
//
// let d = new Tags('<span>',"Тег <span> предназначен для определения строчных элементов документа.",[
//     {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]);
// console.log(d);
//
// let e = new Tags('<input>',"Тег <input> является одним из разносторонних элементов формы и позволяет" +
//     " создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем",[
//     {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ]);
// console.log(e);
//
// let f = new Tags('<form>','Связывает поле с формой по её идентификатору.',);
// console.log(f);
//
// let j = new Tags('<option>','Тег <option> определяет отдельные пункты списка,' +
//     ' создаваемого с помощью контейнера <select>',[
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
// ]);
// console.log(j);
//
// let k = new Tags('<select>','Тег <select> позволяет создать элемент интерфейса' +
//     ' в виде раскрывающегося списка',[
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//     {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
// ]);
// console.log(k);


// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tags{
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
// let a = new Tags('<a>',"Тег <a> является одним из важных элементов " +
//     "HTML и предназначен для создания ссылок.",[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ])
// console.log(a);
//
// let b = new Tags('<div>',"Элемент <div> является блочным элементом и предназначен для" +
//     " выделения фрагмента документа с целью изменения вида содержимого.",[
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ]);
// console.log(b);
//
// let c = new Tags('<h1>',"HTML предлагает шесть заголовков разного уровня," +
//     " которые показывают относительную важность секции, расположенной после заголовка.",[
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ]);
// console.log(c);
//
// let d = new Tags('<span>',"Тег <span> предназначен для определения строчных элементов документа.",[
//     {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
//     {
//         titleOfAttr: 'class',
//         actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]);
// console.log(d);
//
// let e = new Tags('<input>',"Тег <input> является одним из разносторонних элементов формы и позволяет" +
//     " создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем",[
//     {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
//     {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
// ]);
// console.log(e);
//
// let f = new Tags('<form>','Связывает поле с формой по её идентификатору.',);
// console.log(f);
//
// let j = new Tags('<option>','Тег <option> определяет отдельные пункты списка,' +
//     ' создаваемого с помощью контейнера <select>',[
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
// ]);
// console.log(j);
//
// let k = new Tags('<select>','Тег <select> позволяет создать элемент интерфейса' +
//     ' в виде раскрывающегося списка',[
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//     {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
// ]);
// console.log(k);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model:'bmw',
//     producer:'germany',
//     output:'2018',
//     maxSpeed:320,
//     engineCapacity:'4,4l',
//     drivers: 'none',
//     drive:function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info:function () {
//         console.log(this);
//     },
//     increaseMaxSpeed:function (newSpeed){
//         this.maxSpeed += newSpeed;
//     },
//     changeYear:function (newValue){
//         this.output = newValue;
//     },
//     addDriver:function (driver){
//         this.shofer = driver;
//     },
// }
// car.drive();
// car.info()
// car.increaseMaxSpeed(100);
// car.changeYear('2019');
// car.addDriver({name:'Yura',age:22});


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//     виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Cars(model, producer, output, maxSpeed, engineCapacity,drivers) {
//     this.model = model;
//     this.producer = producer;
//     this.output = output;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drivers = null;
//
//
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.drive();
//
//     this.info = function (){
//         console.log(this);
//     }
//     this.info()
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.increaseMaxSpeed(50);
//
//     this.changeYear = function (newValue){
//         this.output = newValue;
//     }
//     this.changeYear(2020);
//
//     this.addDriver = function (driver){
//         this.drivers = driver;
//     }
//     this.addDriver({name:'yura',age:24});
//
//     this.thisLogger = function (){
//         console.log(this);
//     }
// }
// let bmwM5 = new Cars('bmw','germany',2019,340,'4,3l','none');
// bmwM5.thisLogger()

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// =============================================
// class Cars{
//     constructor(model, producer, output, maxSpeed, engineCapacity,drivers) {
//         this.model = model;
//         this.producer = producer;
//         this.output = output;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drivers = null;}
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue){
//         this.output = newValue
//     }
//     addDriver(driver){
//         this.drivers = driver;
//     }
//
//
// }
// let bmwM5 = new Cars('bmw', 'germany','2019', 340, '4,4l',);
// console.log(bmwM5);
//
// bmwM5.drive();
// bmwM5.info();
// bmwM5.increaseMaxSpeed(40);
// bmwM5.changeYear('2020');
// bmwM5.addDriver({name: 'Oleg', age:34});

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Human {
//     constructor(name,age,size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// class Cinderella extends Human{
//     constructor(name,age,size) {
//         super(name,age,size);
//
//     }}
//
// let girl1 = new Cinderella('Anna', 21, 34);
// let girl2 = new Cinderella('Vika', 23, 33);
// let girl3 = new Cinderella('Liza', 21, 31);
// let girl4 = new Cinderella('Karina', 21, 32);
// let girl5 = new Cinderella('Olya', 21, 36);
// let girl6 = new Cinderella('Masha', 21, 37);
// let girl7 = new Cinderella('Katya', 21, 35);
// let girl8 = new Cinderella('Alina', 21, 39);
// let girl9 = new Cinderella('Emeli', 21, 34);
// let girl10 = new Cinderella('Natasha', 21, 40);
//
// let girls= [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10];
//
// class Prince extends Human{
//     constructor(name,age,size) {
//         super(name,age,size);
//     }
//     findCinderella(Cinderellas){
//         for (const girl of girls) {
//             if (man.size === girl.size){
//                 console.log(`${man.name} and ${girl.name} happy family`);
//             }
//         }
//     }
// }
// let man = new Prince('Oleg',31,33);
// man.findCinderella(girls);


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella (name,age,size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// let girl1 = new Cinderella('Anna', 21, 34);
// let girl2 = new Cinderella('Vika', 23, 33);
// let girl3 = new Cinderella('Liza', 21, 31);
// let girl4 = new Cinderella('Karina', 21, 32);
// let girl5 = new Cinderella('Olya', 21, 36);
// let girl6 = new Cinderella('Masha', 21, 37);
// let girl7 = new Cinderella('Katya', 21, 35);
// let girl8 = new Cinderella('Alina', 21, 39);
// let girl9 = new Cinderella('Emeli', 21, 34);
// let girl10 = new Cinderella('Natasha', 21, 40);
//
// let girls = [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10];
//
// function Prince (name,age,shoseSize){
//     this.name = name;
//     this.age = age;
//     this.shoseSize = shoseSize;
//
//     this.findPrincess = (Princess) => {
//         for (const girl of girls) {
//             if (princ.shoseSize === girl.size){
//                 console.log(`${this.name} and ${girl.name} happy family`);
//             }
//         }
//     }
//
// }
// let princ = new Prince('Victor', 34, 31);
//
// princ.findPrincess(girls);

