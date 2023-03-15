class Car {
     static description = 'Класс описывающий автомобиль';

     static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
     }
#test = 'test';

   constructor({brand, model, price}= {}){
     this.brand = brand;
     this.model = model;
     this.price = price;

     // console.log('make constructor');
     // console.log("this",  this);

     // this.a = 5;
     // this.b = 10;
};

changePrice (newPrice) {
     this.price = newPrice;
   }

updateModel(newModel) {
     this.model = newModel;
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

Car.logInfo(myCar);  
// console.log(myCar.#test) - приватное поле класса,
//  можно использовать в методах класса? нельзя получить доступ извне.  