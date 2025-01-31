// function findAverage(array) {

//     if (array.length !== 0) {
//      const sum = array.reduce((prevNumber, number) => {return prevNumber + number}, 0);
//      const averageNumbers = sum/array.length;

//      console.log(averageNumbers);

//     } else {console.log(0)};
//    }

//    findAverage([1, 2, 3]);

// function grow(x){
//    const multiply = x.reduce((prevNumber, number) => prevNumber * number)
//    console.log(multiply)
// }

// grow([1, 2, 3, 4])

// function summa(num) {
//    // Code here
//   let sum = 0
//    for (let i = 1; i <= num; i +=1){
//     sum += i

//    }
//    console.log(sum)
//  }
// summa(3)

// function hero(bullets, dragons){
//   const deadDradon = dragons * 2
//   let destinyHero = true;

//  console.log(bullets >= deadDradon ? destinyHero : !destinyHero)
// }

// hero(10, 3)

// function descendingOrder(n){

//         console.log(parseInt(String(n).split('').sort().reverse().join('')))
//       }
//     descendingOrder(123)

// function XO(str) {
//   const x = [...str].filter(l => l === 'x').length
//   const o = [...str].filter(l => l === 'o').length
//   const eps = x === 0 && o === 0
//     console.log(str ? x === o || eps : x!==o)
// }
// XO("lm")

// function sumMix(x){
//   return x.map(Number).reduce((acc, curr) => acc + curr, 0)
//   }

//   sumMix([9, 3, '7', '3']

// function countSheeps(sheep) {
//  const oneSheep = sheep.filter(s => s === true).length
//   console.log(oneSheep)
// }
// countSheeps( [[], 0, true, false, true],)
// function countBy(x, n) {
//   let z =  Array.from({length: n}, (_,i) => x *(i + 1))
//   console.log(z)
// }

// countBy(3,5)

// function validatePIN (pin) {
//   const isValidLength = pin.length === 4 || pin.length === 6
//   const isNumeric = /ˆ\d+$/.test(pin)
//   return isValidLength && isNumeric
// }

// validatePIN ("1233")

// function accum(s) {

//   const string  =  s.split("").map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join("-")
// 	console.log(string)
// }

// accum("abc")
// function abbrevName(name){

//   console.log(name.split(" ").map(n => n[0].toUpperCase()).join("."))

// }
// abbrevName("Sam Harris")

// function minMax(arr){

//   console.log([Math.min(...arr), Math.max(...arr)])
// }

// minMax([1])

// function digitize(n) {
//   console.log(Array.from(String(n), Number).reverse())
// }

// digitize(35231)

// function checkForFactor (base, factor) {
// console.log(base % factor === 0)
// }

// checkForFactor(10,2)
// function getSum(a, b)
// {
//   const min = Math.min(a,b)
//   const max = Math.max(a,b)
//   const n = max - min + 1
//   const sum = (n * (min + max))/2
//  console.log(sum)

// }

// (getSum(0,-1))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processNumbers = arr => arr.filter(n => n % 2 === 0);

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     result.push(arr[i] * 2);
//   }
// }

console.log(processNumbers(numbers));
