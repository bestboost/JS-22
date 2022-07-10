
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



// // Task 3

// const logins = ['dgdf', 'jkhjkj', 'qwqwqw', 'klklk', 'xcxcxc'];

// const findLogin = function (allLogins, loginToFind) {
        
//     //     for (const login of allLogins) {
//     //         if (login === loginToFind) {
//     //             return `Пользователь ${loginToFind} найден.`;
//     //         }
//     //     }
//     //  return `Пользователь ${loginToFind} не найден.`;
//     // };
    
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'klklk'));
// console.log(findLogin(logins, 'lmlmlm'));
// console.log(findLogin(logins, 'popopo'));
// console.log(findLogin(logins, 'xcxcxc'));



// // Task 4
// // Напиши функцию findSmallestNumber(numbers) поиска самого маленького числа в массиве,
// // при условии что числа уникальные (не повторяются).
// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {

//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// };

// console.log(findSmallestNumber([5, 6, 2, -8, 9]));
// console.log(findSmallestNumber([56, 76, 82, 2, 9]));
// console.log(findSmallestNumber([100, 66, 42, 4, 5]));