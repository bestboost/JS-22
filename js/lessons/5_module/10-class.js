// class Car {
//      static description = 'Класс описывающий автомобиль';

//      static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//      }
// #test = 'test';

//    constructor({brand, model, price}= {}){
//      this.brand = brand;
//      this._model = model;
//      this._price = price;

//      // console.log('make constructor');
//      // console.log("this",  this);

//      // this.a = 5;
//      // this.b = 10;
// };

// get price() {
//      return this._price;
// };

// set price(newPrice) {
//      this._price = newPrice;
// }

// get model() {
//      return this._model;
// }

// set model(newModel) {
//      this._model = newModel;
//    }   
// };

// console.dir(Car);
// console.log(Car.description);

// const myCar = new Car({
//           brand: 'Audi',
//           model: 'Q3',
//           price: 35000,
//      }); 
// console.log(myCar);

// console.log(myCar.model);
// myCar.model = 'Q4';
// console.log(myCar.model);

// console.log(myCar.price);
// myCar.price = 'Q4';
// console.log(myCar.price);

// Car.logInfo(myCar);  
// // console.log(myCar.#test) - приватное поле класса,
// //  можно использовать в методах класса? нельзя получить доступ извне.  

// class Hero {
//      constructor({name = 'hero', xp = 0} = {}) {
//           this.name = name;
//           this.xp = xp;
//      };

//      gainXP(amount) {
//        console.log(`${this.name} получает ${amount} опыта`);
//        this.xp += amount;
//      };
// };

// // const mango = new Hero({
// //      name: 'Mango',
// //      xp: 1000,
// // })

// // console.log(mango)
// // mango.gainXP(1000);
// // console.log(mango);

// class Warrior extends Hero {
//      constructor({weapon, ...restProps}) {
//           super(restProps);

//           this.weapon = weapon;
//      };

//      attack () {
//           console.log(`${this.name} атакует используя ${this.weapon}`)
//      }
// };

// const mango = new Warrior({
//           name: 'Mango',
//           xp: 1000,
//           weapon: 'алебарда',
//      })

// class Berserk extends Warrior {
//      constructor ({warcry, ...restProps} = {}) {
//           super(restProps);

//           this.warcry = warcry;
//      }

//      babyRage() {
//           console.log(this.warcry);
//      }
// }   

// const ajax = new Berserk ({
//      name: 'Ajax',
//      xp: 200,
//      weapon: 'axe',
//      warcry: 'Waaaaaah',
// })
// console.log("🚀 ~ file: 10-class.js:117 ~ ajax:", ajax)



// class Mage extends Hero {
//      constructor({ spells, ...restProps}) {
//           super(restProps);

//           this.spells = spells;
//      };

//      cast() {
//           console.log(`${this.name} кастует`);
//      }
// }; 
   
// const poly = new Mage({
//      name: 'Poly',
//      xp: 500,
//      spells: ['фаербол']
// });

// console.log("🚀 ~ file: 10-class.js:92 ~ mango :", mango )
// mango.gainXP(1000);
// mango.attack();
// mango.gainXP(1000);

// console.log("🚀 ~ file: 10-class.js:118 ~ poly:", poly)
// poly.cast();
// poly.gainXP(200)

class User {
     email;
   
     constructor(email) {
       this.email = email;
     }
   
     get email() {
       return this.email;
     }
   
     set email(newEmail) {
       this.email = newEmail;
     }
   }
   class Admin extends User {
     // Change code below this line
   
     static AccessLevel = {
       BASIC: "basic",
       SUPERUSER: "superuser",
     };
   
     constructor({ email, accessLevel, blacklistedEmails = [] }) {
       super(email);
       this.accessLevel = accessLevel;
       this.blacklistedEmails = blacklistedEmails;
     }
   
     blacklist(email) {
       this.blacklistedEmails.push(email);
     }
     
     isBlacklisted(email) {
         
       this.blacklistedEmails.find(email => email);
     }
   
     // Change code above this line
   }
 
   const mango = new Admin({
     email: "mango@mail.com",
     accessLevel: Admin.AccessLevel.SUPERUSER,
   });
   
   console.log(mango.email); // "mango@mail.com"
   console.log(mango.accessLevel); // "superuser"
   
   mango.blacklist("poly@mail.com");
   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
   console.log(mango.isBlacklisted("mango@mail.com")); // false
   console.log(mango.isBlacklisted("poly@mail.com")); // true
   