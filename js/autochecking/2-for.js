// for (let i = 0; i < 10; i += 1) {
//     console.log(i);
// }
// console.log('dfdvb');


// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);
    
//     totalSalary += salary;
// }
// console.log('totalSalary: ', totalSalary);


const min = 5;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {

    if (i % 2 !== 0) {
        console.log('Не четное: ', i)
        continue;
    }
    console.log('четное: ', i)
    total += i;
}
console.log('total: ',total);