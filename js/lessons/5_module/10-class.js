class Car {
     static description = 'Класс описывающий автомобиль';

     static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
     }
#test = 'test';

   constructor({brand, model, price}= {}){
     this.brand = brand;
     this._model = model;
     this._price = price;

     // console.log('make constructor');
     // console.log("this",  this);

     // this.a = 5;
     // this.b = 10;
};

get price() {
     return this._price;
};

set price(newPrice) {
     this._price = newPrice;
}

get model() {
     return this._model;
}

set model(newModel) {
     this._model = newModel;
   }   
};

console.dir(Car);
console.log(Car.description);

const myCar = new Car({
          brand: 'Audi',
          model: 'Q3',
          price: 35000,
     }); 
console.log(myCar);

console.log(myCar.model);
myCar.model = 'Q4';
console.log(myCar.model);

console.log(myCar.price);
myCar.price = 'Q4';
console.log(myCar.price);

Car.logInfo(myCar);  
// console.log(myCar.#test) - приватное поле класса,
//  можно использовать в методах класса? нельзя получить доступ извне.  