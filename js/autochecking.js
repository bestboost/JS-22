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


// function calculateTotal(number) {
//     // написати функцію
//     // функція приймає цілі числа
//     // повернути суму чисел від 1 до намбер
//     if (Number.isInteger(number)) {
//         let sum = 0;
//         for (let i = 1; i <= number; i++) {
//             sum += i;
//             // return sum;
//             console.log(sum);
//         }
//     }
// }
// calculateTotal(3);



// function calculateTotal(number) {
//     // Change code below this line
//     const min = 1;
//    let total = 0;
//    for (let i = min; i <= number; i += 1) {
//        total += i;
// //    return total;
//     }
//     console.log('total: ', total);
//      // Change code above this line
// }
// calculateTotal(3);
// calculateTotal(7);


// function calculateTotalPrice(order) {
   
//     let total = 0;
//     // Change code below this line
 
//     for (const sum of order) {
//         total += sum;
//     }
    
//     // Change code above this line
//     // return total;
//     console.log('total: ', total);
// }
// calculateTotalPrice([12, 85, 37, 4]);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const key = Object.keys(object);
   
//       if (object.hasOwnProperty(key)) {
//         propCount += 1;
//       }
    
//       // return propCount;
    
//     console.log(propCount);
//     // Change code above this line
// }
//  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })



// // 1. Напиши функцию countTotalSalary(salaries)
// //  которая принимает объект зарплат,


// //  2. переменную totalSalary использовать для хранения общей суммы зарплаты.


// function countTotalSalary(salaries) {
//     let totalSalary = 0;

// // 3.  рассчитать общую  сумму зарплат сотрудников
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//       }
// //  4. и вернуть общую  сумму зарплат сотрудников
//     console.log(totalSalary);
// }
// //    имя свойства это имя сотрудника,
// //     а значение свойства это зарплата
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });


// 1. Напишсать функцию getProductPrice(productName)
// 2. принимает один параметр productName - название продукта
// 3. Функция ищет объект продукта с таким именем(свойство name)
//  в массиве products
// 4. возвращает его цену(свойство price)
// 5. Если продукт с таким названием не найден,
//     функция должна возвращать null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
    
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
        
//       for (const product of products) {
         
      
//           if (productName === product.name) {
//               console.log(product.price);
//           }
  
//       }
  
//     // Change code above this line
//     console.log(null);
//   }

// getProductPrice("Radar");
// getProductPrice("Grip")
// getProductPrice("Engine");



// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
// const { today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;


function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
 
  console.log(data);
    // Change code above this line
}
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
  
