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



// // Task 2
// //  Поваренок
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     }

//     return makeDish;
//  };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// poly('омлет');
// poly('чай');



// // Task 3
// //  Округлятор
// // const floatingPoint = 3.456789;
// // const someInt = Math.round(floatingPoint);
// // const withDecimals = Number(floatingPoint.toFixed(2));

// // console.log(Number(floatingPoint.toFixed(3)));
// // console.log(Number(floatingPoint.toFixed(4)));

// // rounder2(floatingPoint);
// // rounder3(floatingPoint);

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     }
// }
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.56788));
// console.log(rounder3(3.56788));
// console.log(rounder2(4.90978));
// console.log(rounder3(4.90978));


// Task 4
//  Зарплата
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return `${employeeName} - Ты офигел?`
            }
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Игорь:', 800);
console.log(salaryManagerFactory())
// console.log(salaryManager.current());

// console.log(salaryManager.raise(1100));
// console.log(salaryManager.current());





