// // Task 1
// // Методы обьекта.
// // - changeName
// // - addTrack
// // - updateRating
// // - getTrackCount
// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['Track-1', 'Track-2', 'Track-3'],
//     // trackcount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName', this)
     
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return { trackCount: this.tracks.length };
//     },
// };

// playlist.changeName('New name');

// playlist.addTrack('new track');

// playlist.updateRating(4);

// console.log(playlist);
// console.log(playlist.getTrackCount());



// Task 2
// Работа с коллекцией (массивом объектов)
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);


// // Ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of friends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return `${friendName} Нашли!!!`;
//         }
//     }
    
//     return `${friendName} Не нашли :(`;
//  };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chalsy'));


// // Получаем имена всех друзей
// const getAllNames = function (allFriends) {
// const names = [];
    
//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }
    
//     return names;
// };

// console.log(getAllNames(friends));


// // Получаем имена только друзей которые онлайн
// const getOnlineFriends = function (allFriends) {
//     const friendsOnline = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online) {
//             friendsOnline.push(friend);
//         }
//     }

//     return friendsOnline;
// };

// console.log(getOnlineFriends(friends));



// Task 3
// Работаем с колекцией товаров в корзине:
// { name: 'apple',      price: 50 }
// { name: 'pine apple', price: 70 }
// { name: 'tomato',     price: 60 }
// { name: 'lemon',      price: 110 }

const cart = {
    items: [],
    getItems() {
        return this.items;
     },
    add(product) {

        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
     },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < this.items.length; i += 1) {
            const { name } = this.items[i];

            if (productName === name) {
                console.log(productName);
                console.log(i);

                items.splice(i, 1);
            }
        }
     },
    clear() {
        this.items = [];
     },
    countTotalPrice() { 
        const { items } = this;
            let total = 0;
        
        for (const { price, quantity } of items) {
            total += price * quantity;
        }

        return total;
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'pine apple', price: 70 });
cart.add({ name: 'tomato', price: 60 });
cart.add({ name: 'lemon', price: 110 });
cart.add({ name: 'lemon', price: 110 });
cart.add({ name: 'lemon', price: 110 });

console.table(cart.getItems());

console.log('Total:', cart.countTotalPrice());

cart.remove('tomato');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());