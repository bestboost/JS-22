const stars = 2;
let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }
// console.log(price);


const option = 14;
let message = '';

switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    default:
        message = 'Вам перезвонит менеджер';
}
console.log(message);
