import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeTransaction} from '../../../reducers/transactionsSlice';
import { updateCategoricalExpense, updateTotalExpense } from '../../../reducers/expenseSlice';

const TransactionsTable = () => {
  const dispatch = useDispatch();

  const transactionList = useSelector(state => state.transactionsReducer.filteredTransactions);

  const deleteTransaction = (transaction) => {
    dispatch(removeTransaction(transaction));
    dispatch(updateCategoricalExpense({amount: transaction.expenseAmount, category: transaction.expenseCategory, operation: 'subtract'}));
    dispatch(updateTotalExpense({amount: transaction.expenseAmount, operation: 'subtract'}));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Sr.No.</th>
          <th>Transaction</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {
          transactionList.map((item, idx) => {
            return (
              <tr>
                <td>{idx+1}</td>
                <td>{item.expenseName}</td>
                <td>{item.expenseCategory}</td>
                <td>Rs {item.expenseAmount}</td>
                <td>
                  <button onClick={() => deleteTransaction(item)}>Delete</button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}

export default TransactionsTable