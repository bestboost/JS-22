// payment

// // task 1
// //  Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
//     total += cart[i];
// }

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total)


// // Добавить в каждую ячейку % налога
// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);



// // Task 2
// // Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 === 0) {
//         console.log(`${number} - Четное!`);
//         total += number;
//     }
// }
// console.log('Total:', total);



// // Task 3
// // Напиши скрипт поиска логина

// const logins = ['dgdf', 'jkhjkj', 'qwqwqw', 'klklk', 'xcxcxc'];
// const loginToFind = 'klklk';
// // let message = `Пользователь ${loginToFind} не найден.`;

// // for (const login of logins) {

// //     if (login === loginToFind) {
// //         message = `Пользователь ${loginToFind} найден.`;
// //         break;
// //     }
// // }

// // console.log(message);

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message);



// // Task 4
// // Напиши скрипт поиска самого маленького числа в массиве,
// // при условии что числа уникальные (не повторяются).
// // const numbers = [51, 18, 13, 24, 7, 85, 19];
// // let smallestNumber = numbers[0];

// // for (const number of numbers) {

// //     if (number < smallestNumber) {
// //         smallestNumber = number;
// //     }
// // }
// // console.log('smallestNumber:', smallestNumber);

// // Противоположная задача

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {

//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log('biggestNumber:', biggestNumber);



// // Task 5
// // Напиши скрипт, который объеденяет все элементы массива
// // в значение одной строкой
// const friends = ['Mango', 'Poly', 'Tom', 'Ruth'];
// // let string = '';

// // for (const friend of friends) {
// //     string += friend + ",";
// // }

// // string = string.slice(0, string.length - 1);
// // console.log(string);

// const string = friends.join(', ');
// console.log(string);


// Task 6
// Напиши скрипт который заменяет регистр каждого символа в строке
// на противопожный.
const string = 'JavaScript';
const letter = 