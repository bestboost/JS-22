// // Task 1
// // метод foEach

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//     console.log('number', number);
// });


// // Task 2
// // метод   " map "
// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//     console.log(number);

//     return number * 2;
// });

// console.log(numbers);
// console.log(doubledNums);


// // Task 3

// const players = [
//     { id: 'player - 1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player - 2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     { id: 'player - 3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     { id: 'player - 4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     { id: 'player - 5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// // Получаем массив имен всех игроков

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerId = players.map(player => player.id);
// console.log('playerId', playerId);

// // Увеличить кол-во поинтов каждого игрока на 10%

// const updatePlayers = players.map(player => ({
//         ...player,
//     points: player.points * 1.1,
//    }));

// console.table(updatePlayers);

// // Увеличиваем кол-во часво игрока по id

// const playerIdToUpdate = 'player - 3';

// const updatedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//       return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     };
    
//     return player;
// });

// // const updatedPlayers = players.map(player => playerIdToUpdate === player.id
// //      ? { ...player, timePlayed: player.timePlayed + 100 }
// //     : player,
// // );

// console.table(updatedPlayers);


// // Task 4
// // метод  " filter() "
// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number =>  number < 10 || number > 20);
// console.log(filteredNumbers);

    

// const players = [
//     { id: 'player - 1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     { id: 'player - 2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     { id: 'player - 3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
//     { id: 'player - 4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
//     { id: 'player - 5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
// ];

// // Получаем массив всех онлайн игроков
// const onlinePlayers = players.filter(({online}) => online);
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => !player.online);
// // console.table(offlinePlayers);



// Task 5
// метод  " find() "
const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number =>  number > 10); 
console.log(number);

    

const players = [
    { id: 'player - 1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    { id: 'player - 2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    { id: 'player - 3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    { id: 'player - 4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    { id: 'player - 5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];

// Ищем игрока по id
const playerIdFind = 'player - 3';

const playerWithId = players.find(({id}) => id === playerIdFind);
console.log(playerWithId);


 
const findPlayerById = (allPlayers, playerId) =>
 allPlayers.find(({ id }) => id === playerId);

console.log(findPlayerById(players, 'player - 1'));
console.log(findPlayerById(players, 'player - 4'));