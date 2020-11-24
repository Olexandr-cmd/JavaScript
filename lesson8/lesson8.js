// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let text = document.getElementById('text');
// text.value = localStorage.getItem('text');
// text.oninput = ev => {
//     localStorage.setItem('text', ev.target.value);
// }
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// const form = document.getElementById('form1')
// getDataForm(form);
//
// function saveForm(t){
//     setDataForm(t)
// }
//
// function setDataForm(tag){
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked
//                 ?tagElement.value = true
//                 :tagElement.value = false
//             localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }
//
// function getDataForm(tag){
//     for (let i = 0; i < localStorage.length; i++) {
//        if (localStorage.hasOwnProperty(tag.children[i].id)){
//            tag.children[i].value = localStorage.getItem(tag.children[i].id);
//            if(tag.children[i].value === 'true'){
//                tag.children[i].setAttribute('checked', 'checked')
//            }
//        }
//     }
// }
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки,
// const text = document.getElementById('text')
// const btn1 = document.getElementById('arrow_left');
// const btn2 = document.getElementById('arrow_right');
// const save = document.getElementById('save');
//
// save.onclick = ev => {
//     localStorage.setItem(localStorage.length+1, text.value)
// }
// btn1.onclick = ev => {
//     btn2.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === '1'){
//         btn1.style.visibility = 'hidden'
//         return;
//     }
//     text.value = localStorage.getItem(index - 1)
// }
//
// btn2.onclick = ev => {
//     btn1.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()){
//         btn2.style.visibility = 'hidden'
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1)
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// const ARRAY_USERS = 'ARRAY_USERS';
// let tempUser = {};
// const content = document.getElementById('content')
// const form1 = document.forms.form1;
//
// form1.submit.onclick = ev => {
//     // ev.preventDefault();
//     let person = {...tempUser};
//     tempUser = {}
//     for (let i = 0; i < form1.children.length; i++) {
//             const form1Element = form1.children[i];
//         if (form1Element.name && form1Element.type !== 'submit'){
//         person[form1Element.name] = form1Element.value;
//         }
//     }
//     if (!person.id){
//     person.id = new Date().getTime()
//     }
//     console.log(person);
//     saveUser(person);
// }
// getDateFromLSt()
//
// function saveUser(user){
//     if (localStorage.hasOwnProperty(ARRAY_USERS)){
//         const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         const find = arrayUsers.find(value => value.id === user.id);
//    if (find){
//      const filter = arrayUsers.filter(value => value.id !== user.id);
//      filter.push(user);
//
//      localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))
//    }else {
//        arrayUsers.push(user);
//        localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
//    }
//     }else {
//         localStorage.setItem(ARRAY_USERS,JSON.stringify([user]))
//     }
// }
//
// function getDateFromLSt(){
//     if (localStorage.hasOwnProperty(ARRAY_USERS)){
//        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
//         for (const user of arrUser) {
//             content.appendChild(createDivPerson(user))
//         }
//     }
// }
//
// function createDivPerson(user){
//     const main =  document.createElement('div');
//     let flag = true;
//     for (const key in user) {
//         if (flag){
//             const h3 =  document.createElement('h3');
//             h3.innerText = key + " : "+ user[key];
//             main.appendChild(h3);
//             flag = false;
//         }else{
//             const p =  document.createElement('p');
//             p.innerText = key + " : " + user[key];
//             main.appendChild(p);
//         }
//     }
//     main.style = "width : 300px; border: red 1px solid; float: left";
//     const b1 = document.createElement("button")
//     const b2 = document.createElement("button")
//     b1.innerText = 'Edit'
//     b2.innerText = 'Delete'
//
//     b1.onclick = function (){
//         editUser(user.id);
//     }
//     b2.onclick = function (){
//         deleteUser(user.id);
//     }
//
//
//     main.appendChild(b1)
//     main.appendChild(b2)
//     return main;
// }
// function deleteUser(id){
//    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
//    const filter = parse.filter(user => user.id !== id);
//    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
//    location.reload()
// }
//
// function editUser(id) {
//     const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
//     const user = parse.find(user => user.id === id);
//     for (let i = 0; i < form1.children.length; i++) {
//         const form1Element = form1.children[i];
//         if (form1Element.name && form1Element.type !== 'submit') {
//             for (const key in user) {
//                 if (form1Element.name === key){
//                     form1Element.value = user[key]
//                 }
//             }
//         }
//     }
//     tempUser = user;
// }