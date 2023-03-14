// const objC = {
//      z: 5,
// };

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

const User = function ({email, password} = {}) {
     this.email = email;
     this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
     this.email = newEmail;
}

const mango = new User({email: 'mango@mail.com', password: 1111});

mango.changeEmail('my-new-email@mail.com');
console.log(mango);