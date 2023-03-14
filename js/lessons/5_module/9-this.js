// const user = {
//      tag: 'Mango',
//      showTag() {
//           console.log('showTag -> this', this)
//      }
// }

// user.showTag();

// const showTag = function () {
//      console.log('showTag -> this', this);
//      console.log('showTag -> this.tag', this.tag);
// }

// const user = {
//      tag: 'Mango',
// }

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// const user = {
//      tag: 'Mango',
//      showTag() {
//           console.log('showTag -> this', this);
//           console.log('showTag -> this.tag', this.tag);
//      },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// const user = {
//      tag: 'Mango',
//      showTag() {
//           console.log('showTag -> this', this);
//           console.log('showTag -> this.tag', this.tag);
//      },
// };

// const invokeAction = function (action) {
//      console.log(action);

//      action();
// }

// invokeAction(user.showTag);

// const makeChangeColor = function () {
//      const changeColor = function (color) {
//           console.log('changeColor -> this', this);
//           this.color = color;
//      };

//      // changeColor();

//      const sweater = {
//           color: 'teal',
//      };

//      sweater.updateColor = changeColor;

//      // sweater.updateColor('red');

//      return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();
// swapColor('blue');

// const makeChangeColor = function () {
//      const changeColor = function (color) {
//           console.log('changeColor -> this', this);
//           this.color = color;
//      };

//      return changeColor;
// };

// const updateColor = makeChangeColor();

// const hat = {
//      color: 'blue',
//      updateColor,
// };

// hat.updateColor('orange');
// console.log(hat.color)

// const counter = {
//      value: 0,
//      increment(value) {
//           console.log('increment -> this', this);
//           this.value += value;
//      },
//      discrement(value) {
//           console.log('disrement -> this', this);
//           this.value -= value;
//      },
// };

// const updateCounter = function(value, operation) {
//      operation(value);
// }

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.discrement.bind(counter));
// console.log(counter)




// const showThis = function (...args) {
//   console.log(args)
//   console.log('changeColor -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b:25,
// }
// showThis.call(objA, 2,3,4,10);
// showThis.apply(objA, [1,2,3]);

// const objB = {
//   x: 15,
//   y: 50,
// }

// showThis.call(objB, 11,12,13,14);
// showThis.apply(objB, [11,12,13])
// showThis();


// const changeColor = function (color) {
//             console.log('changeColor -> this', this);
//             this.color = color;
//        };
  
//   const hat = {
//        color: 'black',
//   };
// // changeColor.call(hat, 'orange');
// // console.log(hat)

//   const sweater = {
//     color: 'green',
//   }
//   // changeColor.call(sweater, 'blue');
//   // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweatwerColor = changeColor.bind(sweater);

// changeHatColor('yelowe');
// console.log(hat);

// changeSweatwerColor('rad');
// console.log(sweater);

// const counter = {
//   value: 0,
//   increment() {
//        console.log('increment -> this', this);
//        this.value += 1;
//   },
//   discrement() {
//        console.log('disrement -> this', this);
//        this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function() {
//   counter.discrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function() {
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//         if (potion.name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//              }
//        }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//  for (const potion of this.potions){

//     if (potion.name === potionName) {
//     this.potions.splice(this.potions.indexOf(potion), 1)
//       }
// }
//       },
      
//   updatePotionName(oldName, newName) {

//    for (const potion of this.potions) {

//    if (potion.name === oldName) {
//     // console.log(Object.values(potion)[0])
//     // console.log(Object.values(potion)[0].indexOf(potion.name))
//     console.log(potion.name = newName);
//    }
  
//    }
   
//     const potionIndex = this.potions.indexOf(oldName);
// console.log(potionIndex)
    // if (potionIndex === -1) {
    //   console.log( `Potion ${oldName} is not in inventory!`);
    // }

    // console.log(this.potions.splice(potionIndex, 1, newName));
  // }
  // Change code above this line
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

