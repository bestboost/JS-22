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
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

console.table(friends);


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


// Получаем имена всех друзей