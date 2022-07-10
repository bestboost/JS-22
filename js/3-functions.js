
// // Task 1
// // Напиши функцию calculateTotalPrice(items)
// // которая принемает массив цен(чисел),
// // и возвращает их сумму

// const calculateTotalPrice = function (items) {
//     console.log('внутри функции', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// };

// console.log('то что функция возвращает', calculateTotalPrice([1, 2, 3]));
// console.log('Общая сумма покупок', calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));


// // Task 2
// // Напиши функцию logItems(items)
// //  для перебора и логирования массива
// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems(['Mango', 'Kiwi','Poly','Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура','наушники','часы']);


// Task 3 

const logins = ['dgdf', 'jkhjkj', 'qwqwqw', 'klklk', 'xcxcxc'];

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

const findLogin = function (allLogins, loginToFind) {
    console.log(allLogins);
};
console.log(findLogin(logins, 'klklk'));
console.log(findLogin(logins, 'lmlmlm'));
console.log(findLogin(logins, 'popopo'));
console.log(findLogin(logins, 'xcxcxc'));