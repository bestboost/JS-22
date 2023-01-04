// task 1
const x1 = 10;
const x2 = 30;
const number = 25;

console.log(`Число ${number} попадает ли в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает ли в отрезок до ${x2}?`, number > x2);
const result = number > x1 && number < x2;
console.log(`Число ${number} попадает ли в отрезок от ${x1} до ${x2}?`, result);
const result1 = number < x1 || number > x2;
console.log(`Число ${number} попадает ли в отрезок до ${x1} или от ${x2}?`, result1);