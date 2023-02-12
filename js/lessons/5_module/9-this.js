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

const counter = {
     value: 0,
     increment(value) {
          console.log('increment -> this', this);
          this.value += value;
     },
     discrement(value) {
          console.log('disrement -> this', this);
          this.value += value;
     },
};

const updateCounter = function(value, operation) {
     operation(value);
}

updateCounter(10, counter.increment);
updateCounter(5, counter.discrement);