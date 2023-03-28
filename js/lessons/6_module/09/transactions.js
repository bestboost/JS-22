import transactionHistory from '../data/transactions_data.js';

const makeTransactionTableRowMarkup = ({id, amount, date, business, type, name, account}) => {
     return`
     <tr>
     <td>${id}</td>
     <td>${amount}</td>
     <td>${date}</td>
     <td>${business}</td>
     <td>${type}</td>
     <td>${name}</td>
     <td>${account}</td>
   </tr>
   `;
}
console.log("🚀 ~ file: transactions.js:2 ~ transactionHistory:", transactionHistory)

const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory
.map(makeTransactionTableRowMarkup)
.join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);