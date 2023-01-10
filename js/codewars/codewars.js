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

function summa(num) {
   // Code here
  let sum = 0
   for (let i = 1; i <= num; i +=1){
    sum += i
   
    
   
   }
   console.log(sum)
 }
summa(3)