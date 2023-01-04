let elementWidth = "50.25px";
elementWidth = Number.parseInt(elementWidth)
console.log('parseInt:', elementWidth);

let elementHeight = "200.34px";
elementHeight = Number.parseFloat(elementHeight);
console.log('parseFloat:', elementHeight);

let salary = 1300.16476
salary = Number(salary.toFixed(2));
console.log('toFixed:', salary);

// const base = 3;
// const power = 4;
// const result = Math.pow(base, power);
// console.log('Math.pow:', result);
// console.log( 'Math.pow vs ** :', 2 ** 3);

// 1. Попросить вввести число и сохранить в переменную
// let base = prompt('Input number');
// base = Number(base);
// console.log(base);
// 2. Попросить вввести степень и сохранить в переменную
// let power = prompt('Input power');
// power = Number(power);
// console.log(power);
// 3. возвести введенные данные в степень и вывести результат
// const result = base ** power;
// console.log(result);

// const min = 10;
// const max = 50;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

const colors = ['tomato', 'teal', 'orange', 'skyblue', 'lightpink'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;

