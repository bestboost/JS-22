// const objC = {
//      z: 5,
// };

// const { readFileSync } = require("fs");

// const objB = Object.create(objC);
// // console.log(objB);
// objB.y = 2;

// // console.log('objC',objC);
// // console.log(objC.hasOwnProperty('z'));

// // console.log('objB', objB);
// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;

// // objA.z = 1000;

// console.log('objA', objA);
// // console.log(objA.z)
// console.log(objA.hasOwnProperty('y'));


// const Car = function ({brand, model, price}= {}) {
//      // console.log(this);

//      this.brand = brand;
//      this.model = model;
//      this.price = price;


// };

// console.log(Car.prototype)

// Car.prototype.sayHi = function () {
//      console.log('Car.prototype.sayHi -> this', this);
//      console.log('Hello :)'); 
// };

// Car.prototype.changePrice = function (newPrice) {
//      this.price = newPrice;
// }

// const myCar = new Car({
//      brand: 'Audi',
//      model: 'Q3',
//      price: 35000,
// }); 

// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({
//      brand: 'BMV',
//      model: 'X6',
//      price: 50000,
// }); 

// console.log(myCar2);
// myCar.sayHi();

// const myCar3 = new Car({
//      brand: 'Tesla',
//      model: 'S',
//      price: 100000,
// }); 

// console.log(myCar3);
// myCar3.sayHi();

// const User = function ({email, password} = {}) {
//      this.email = email;
//      this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//      this.email = newEmail;
// }

// const mango = new User({email: 'mango@mail.com', password: 1111});

// mango.changeEmail('my-new-email@mail.com');
// console.log(mango);


// const CounterPlugin = function ({rootSelector, initialValue = 0, step = 1} = {}) {
  
//      this._value = initialValue;
//      this._step = step;

//      this._refs = this._getRefs(rootSelector);

//      this._bindEvents();
//      this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
     
//      const refs = {};
//      refs.container = document.querySelector(rootSelector);
//      refs.incrementBtn = refs.container.querySelector('.js-increment');
//      refs.decrementBtn = refs.container.querySelector('.js-decrement');
//      refs.value = refs.container.querySelector('.js-value');
    
//      return refs;
// }

// CounterPlugin.prototype._bindEvents = function() {
//      this._refs.incrementBtn.addEventListener('click', () => {
//           this.increment();
//           this.updateValueUI();
//      });

//      this._refs.decrementBtn.addEventListener('click', () => {
//           this.decrement();
//           this.updateValueUI();
//      });
// }

// CounterPlugin.prototype.updateValueUI = function (){
//      this._refs.value.textContent = this._value;
// } 

// CounterPlugin.prototype.increment = function () {
//      this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//      this._value -= this._step;
// };

//  new CounterPlugin({rootSelector: '#counter1', step: 10});


//  new CounterPlugin({rootSelector: '#counter2', step: 2});

 
