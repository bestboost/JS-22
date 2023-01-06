const x1 = 10;
const x2 = 30;
const number = 15;

console.log(`Число ${number} попадаеть в отрезок до ${x1}?`, 
number < x1);
console.log(`Число ${number} попадаеть в отрезок после ${x2}?`, 
number > x2);
console.log(`Число ${number} попадаеть в отрезок от ${x1} до ${x2}?`, 
number > x1 && number < x2);
console.log(`Число ${number} попадаеть в отрезок от ${x1} до ${x2}?`, 
number < x1 || number > x2);