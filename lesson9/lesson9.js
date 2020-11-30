// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.


// **************CB HELL*********************
// function myDayAction(time, cb){
//     console.log('Заграв будильник');
//     console.log('Дивлюсь на годиник');
//
//     setTimeout(()=>{
//         if (time < 7){
//             cb(`${time} година, Рано вставати`, null);
//         }else {
//             cb(null, `${time} година`);
//         }
//
//     },1000);
// }
//
//
//
// myDayAction(7, (err, date) => {
//     if (err){
//         console.log(err);
//         return;
//     }else {
//         console.log('Пора вставати', date);
//     }actionOne(true,(err,date)=>{
//         if (err){
//             console.log(err);
//             return;
//         }else {
//             console.log('В холодильнику', date);
//         }actionTwo('lamborghini',(err,date)=>{
//             if (err){
//                 console.log(err);
//                 return;
//             }else {
//                 console.log(date);
//             }actionThree(170,(err,date)=>{
//                 if (err){
//                     console.log(err,'GG!!!');
//                     return;
//                 }else {
//                     console.log(date);
//                 }actionFour(1100000,(err,date)=> {
//                     if (err){
//                         console.log(err);
//                         return;
//                     }else {
//                         console.log(date);
//                     }actionFive('tesla',(err,date)=>{
//                         if (err){
//                             console.log(err);
//                             return;
//                         }else {
//                             console.log(date);
//                         }actionSix(true,(err,date)=>{
//                             if (err){
//                                 console.log(err);
//                             }else {
//                                 console.log(date);
//                             }actionSeven('auto',(err,date)=>{
//                                 if (err){
//                                     console.log(err,'RIP');
//                                 }else {
//                                     console.log(date);
//                                 }
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// } )
//
// function actionOne(eat,cb){
//     console.log('Іду на кухню');
//     console.log('Дивлюсь в холодильник');
//
//    setTimeout(()=>{
//        if (!eat){
//            cb('Нема їжі помер з голода', null);
//        }else {
//            cb(null, `є їжа, поїв`);
//        }
//    },1500)
// }
// function actionTwo(car,cb){
//     console.log('Вийшов з дому, пішов в гараж');
//
//     setTimeout(()=> {
//         if (car !== 'lamborghini'){
//             cb(`Джун на ${car} не їздить`,null);
//         }else {
//             cb(null, `Оооо ${car} можна їхати`);
//         }
//     },1000)
// }
// function actionThree(speed, cb){
//     console.log('Їду на роботу');
//
//     setTimeout(()=>{
//         if (speed >= 200){
//             cb(`Зупинили мусара, швидксть більша дозволеної, не доїхав`, null);
//         }else {
//             cb(null, 'Приїхав на роботу, забрати зарплату');
//         }
//     },2500)
// }
// function actionFour(salary, cb){
//     console.log('Отримую зарплату');
//
//     setTimeout(()=> {
//         if (salary < 1000000){
//             cb(`Джун за ${salary} не працює`, null);
//         }else {
//             cb(null,`Забрав ${salary}, можна їхати по нову тачку`);
//         }
//     },3000)
// }
//
// function actionFive(newCar, cb){
//     console.log('Їду в автосалон по нову тачку');
//
//     setTimeout(()=> {
//         if (newCar !== 'tesla'){
//             cb(`must have для джуна Tesla а не ${newCar}`, null);
//         }else{
//             cb(null, `Купив ${newCar} можна їхати обмивати`);
//         }
//     }, 2500)
// }
// function actionSix(alcohol,cb){
//     console.log('Приїхав в ресторан обмивати');
//
//     setTimeout(()=>{
//         if (!alcohol){
//             cb('Обмивання без бухла, не обмивання',null);
//         }else {
//             cb(null, 'Обмив, можна їхати додому');
//         }
//     },2000)
// }
// function actionSeven(toGetHome,cb){
//     console.log('На чому їхати додому??? Taxi or Car?');
//
//     setTimeout(()=>{
//         if (toGetHome !== 'taxi'){
//             cb('Сів за руль пьяний розбився.',null);
//         }else {
//             cb(null, 'Доїхав на taxi, ліг спати');
//         }
//     },1500)
// }


//*******************PROMISE********************
// function myDayAction(time){
//     return new Promise((resolve, reject) =>{
//         console.log('Заграв будильник');
//         console.log('Дивлюсь на годиник');
//
//     setTimeout(()=>{
//         if (time < 7){
//            reject(`${time} година, Рано вставати`);
//         }else {
//             resolve(`Пора вставати ${time} година`);
//         }
//
//     },1000);
// })
// }
//
// function actionOne(eat){
//     return new Promise((resolve, reject) => {
//        console.log('Іду на кухню');
//        console.log('Дивлюсь в холодильник');
//
//        setTimeout(()=>{
//            if (!eat){
//                reject('Нема їжі помер з голода');
//            }else {
//                resolve(`В холодильнику, є їжа, поїв`);
//            }
//        },1500)
//    })
// }
// function actionTwo(car){
//     return new Promise((resolve, reject) => {
//        console.log('Вийшов з дому, пішов в гараж');
//
//        setTimeout(()=> {
//            if (car !== 'lamborghini'){
//                reject(`Джун на ${car} не їздить`);
//            }else {
//                resolve(`Оооо ${car} можна їхати`);
//            }
//        },1000)
//    })
// }
// function actionThree(speed){
//     return new Promise((resolve, reject) => {
//        console.log('Їду на роботу');
//
//        setTimeout(()=>{
//            if (speed >= 200){
//                reject(`Зупинили мусара, швидксть більша дозволеної, не доїхав`);
//            }else {
//                resolve('Приїхав на роботу, забрати зарплату');
//            }
//        },2500)
//    })
// }
// function actionFour(salary){
//     return new Promise((resolve, reject) => {
//       console.log('Отримую зарплату');
//
//       setTimeout(()=> {
//           if (salary < 1000000){
//              reject(`Джун за ${salary} не працює`);
//           }else {
//               resolve(`Забрав ${salary}, можна їхати по нову тачку`);
//           }
//       },3000)
//   })
// }
//
// function actionFive(newCar){
//      return new Promise((resolve, reject) => {
//        console.log('Їду в автосалон по нову тачку');
//
//        setTimeout(()=> {
//            if (newCar !== 'tesla'){
//                reject(`must have для джуна Tesla а не ${newCar}`);
//            }else{
//                resolve(`Купив ${newCar} можна їхати обмивати`);
//            }
//        }, 2500)
//    })
// }
// function actionSix(alcohol){
//     return new Promise((resolve, reject) => {
//        console.log('Приїхав в ресторан обмивати');
//
//        setTimeout(()=>{
//            if (!alcohol){
//                reject('Обмивання без бухла, не обмивання');
//            }else {
//                resolve('Обмив, можна їхати додому');
//            }
//        },2000)
//    })
// }
// function actionSeven(toGetHome){
//     return new Promise((resolve, reject) => {
//       console.log('На чому їхати додому??? Taxi or Car?');
//
//       setTimeout(()=>{
//           if (toGetHome !== 'taxi'){
//               reject('Сів за руль пьяний розбився.');
//           }else {
//               resolve('Доїхав на taxi, ліг спати');
//           }
//       },1500)
//   })
// }
//
// myDayAction(8)
//     .then(value => {
//         console.log(value);
//
//         return actionOne(true);
//     })
//     .then(value => {
//         console.log(value);
//
//         return actionTwo('lamborghini');
//     })
//     .then(value => {
//         console.log(value);
//         return actionThree(120);
//     })
//     .then(value => {
//         console.log(value);
//
//         return actionFour(1100000);
//     })
//     .then(value => {
//         console.log(value);
//
//         return actionFive('tesla');
//     })
//     .then(value => {
//         console.log(value);
//
//         return actionSix(true);
//     })
//     .then(value => {
//         console.log(value);
//
//         return actionSeven('taxi');
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
// .finally(() => {
//     console.log('FINAL')
// });

//***************Async Await********************
// function myDayAction(time){
//     return new Promise((resolve, reject) =>{
//         console.log('Заграв будильник');
//         console.log('Дивлюсь на годиник');
//
//         setTimeout(()=>{
//             if (time < 7){
//                 reject(`${time} година, Рано вставати`);
//             }else {
//                 resolve(`Пора вставати ${time} година`);
//             }
//
//         },1000);
//     })
// }
//
// function actionOne(eat){
//     return new Promise((resolve, reject) => {
//         console.log('Іду на кухню');
//         console.log('Дивлюсь в холодильник');
//
//         setTimeout(()=>{
//             if (!eat){
//                 reject('Нема їжі помер з голода');
//             }else {
//                 resolve(`В холодильнику, є їжа, поїв`);
//             }
//         },1500)
//     })
// }
// function actionTwo(car){
//     return new Promise((resolve, reject) => {
//         console.log('Вийшов з дому, пішов в гараж');
//
//         setTimeout(()=> {
//             if (car !== 'lamborghini'){
//                 reject(`Джун на ${car} не їздить`);
//             }else {
//                 resolve(`Оооо ${car} можна їхати`);
//             }
//         },1000)
//     })
// }
// function actionThree(speed){
//     return new Promise((resolve, reject) => {
//         console.log('Їду на роботу');
//
//         setTimeout(()=>{
//             if (speed >= 200){
//                 reject(`Зупинили мусара, швидксть більша дозволеної, не доїхав`);
//             }else {
//                 resolve('Приїхав на роботу, забрати зарплату');
//             }
//         },2500)
//     })
// }
// function actionFour(salary){
//     return new Promise((resolve, reject) => {
//         console.log('Отримую зарплату');
//
//         setTimeout(()=> {
//             if (salary < 1000000){
//                 reject(`Джун за ${salary} не працює`);
//             }else {
//                 resolve(`Забрав ${salary}, можна їхати по нову тачку`);
//             }
//         },3000)
//     })
// }
//
// function actionFive(newCar){
//     return new Promise((resolve, reject) => {
//         console.log('Їду в автосалон по нову тачку');
//
//         setTimeout(()=> {
//             if (newCar !== 'tesla'){
//                 reject(`must have для джуна Tesla а не ${newCar}`);
//             }else{
//                 resolve(`Купив ${newCar} можна їхати обмивати`);
//             }
//         }, 2500)
//     })
// }
// function actionSix(alcohol){
//     return new Promise((resolve, reject) => {
//         console.log('Приїхав в ресторан обмивати');
//
//         setTimeout(()=>{
//             if (!alcohol){
//                 reject('Обмивання без бухла, не обмивання');
//             }else {
//                 resolve('Обмив, можна їхати додому');
//             }
//         },2000)
//     })
// }
// function actionSeven(toGetHome){
//     return new Promise((resolve, reject) => {
//         console.log('На чому їхати додому??? Taxi or Car?');
//
//         setTimeout(()=>{
//             if (toGetHome !== 'taxi'){
//                 reject('Сів за руль пьяний розбився.');
//             }else {
//                 resolve('Доїхав на taxi, ліг спати');
//             }
//         },1500)
//     })
// }
//
// async function start(){
//     try{
//         const myDay = await myDayAction(8);
//         console.log(myDay);
//
//         const One = await actionOne(true);
//         console.log(One);
//
//         const Two = await actionTwo('lamborghini');
//         console.log(Two);
//
//         const Three = await actionThree(170);
//         console.log(Three);
//
//         const Four = await actionFour(1200000);
//         console.log(Four);
//
//         const Five = await actionFive('tesla');
//         console.log(Five);
//
//         const Six = await actionSix(true);
//         console.log(Six);
//
//         const Seven = await actionSeven('taxi');
//         console.log(Seven);
//
//     } catch (e){
//         console.log(e);
//     }
//
// }
//
// start();
