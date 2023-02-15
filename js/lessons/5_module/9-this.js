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
//           this.value += value;
//      },
// };

// const updateCounter = function(value, operation) {
//      operation(value);
// }

// updateCounter(10, counter.increment);
// updateCounter(5, counter.discrement);

// 

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
        if (potion.name.includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
             }
       }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
 for (const potion of this.potions){

    if (potion.name === potionName) {
    this.potions.splice(this.potions.indexOf(potion), 1)
      }
}
      },
      
  updatePotionName(oldName, newName) {

   for (const potion of this.potions) {

   if (potion.name === oldName) {
    // console.log(Object.values(potion)[0])
    // console.log(Object.values(potion)[0].indexOf(potion.name))
    console.log(potion.name = newName);
   }
  
   }
   
//     const potionIndex = this.potions.indexOf(oldName);
// console.log(potionIndex)
    // if (potionIndex === -1) {
    //   console.log( `Potion ${oldName} is not in inventory!`);
    // }

    // console.log(this.potions.splice(potionIndex, 1, newName));
  }
  // Change code above this line
};
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");