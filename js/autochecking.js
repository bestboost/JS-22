// function getExtremeElements(array) {
//     console.log(array[0], array[array.length - 1]);
//     return;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);



// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//  const calculateMessage = message.split(" ").length;
//    let price;
 
//  price = calculateMessage * pricePerWord;
   
  

//     console.log(price);
//     // Change code above this line
//  }
// calculateEngravingPrice("JavaScript is in my blood", 10);



// function slugify(title) {
//     const re = / /g;
  
//   let slug;
//   slug = title.toLowerCase().replace(re, '-');
//   console.log(slug);
// }
// slugify("Arrays for begginers");



// function makeArray(firstArray, secondArray, maxLength) {
   
// const newArrya = firstArray.concat(secondArray);

//     console.log(newArrya.slice(0, maxLength));
//   }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)


function calculateTotal(number) {
    // написати функцію
    // функція приймає цілі числа
    // повернути суму чисел від 1 до намбер
    if (Number.isInteger(number)) {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
            // return sum;
            console.log(sum);
        }
    } 
}
calculateTotal(3);