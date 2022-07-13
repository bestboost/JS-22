// // Task 1
// // функция фильтр
// const filter = function (array, test ) {
//     const filreredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filreredArray.push(el);
//         }
//     }

//     return filreredArray;
// };
 
// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isfresh: true },
//     { name: 'grapes', quantity: 150, isfresh: false },
//     { name: 'bananas', quantity: 100, isfresh: true },
// ];

// const getFtuitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 150;
// }

// const r3 = filter(fruits, getFtuitsWithQuantity);
// console.log(r3);


