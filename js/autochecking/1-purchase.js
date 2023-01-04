let balance = 10000;
const payment = 2000;

console.log(`Общая сумма заказов ${payment} кредитов. Проверяем кол - во доступных средств на счету.`);

if (balance >= payment) {
    console.log('ok');

    balance -= payment;
    console.log(`На счету осталось ${balance} кредитов`);
} else {
    console.log('На счету не достаточно стедств для операции!')
}
console.log('Операция завершена');