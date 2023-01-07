function findAverage(array) {

    if (array.length !== 0) {
     const sum = array.reduce((prevNumber, number) => {return prevNumber + number}, 0);
     const averageNumbers = sum/array.length;
    
     console.log(averageNumbers);
   
    } else {console.log(0)};
   }

   findAverage([1, 2, 3]);