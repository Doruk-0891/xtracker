import React from 'react'
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../reducers/transactionsSlice';

const NewExpenseForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //   have to use user data here
        dispatch(addTransaction({id: 1, expenseName: 'shopping', expenseAmount: 1000, expenseCategory: 'food'}));
    }

  return (
    <div className='expense-form-container'>
        <h2 className='text-underline'>New Expense Form</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-first-row'>
                <div>
                    <label htmlFor='expenseName'>Expense Name: </label>
                    <input id='expenseName' type='text' />
                </div>
                
                <div>
                    <label htmlFor='expenseCategory'>Select Category: </label>
                    <select>
                        <option disabled>--select--</option>
                        <option value={'food'}>Food</option>
                        <option value={'travel'}>Travel</option>
                        <option value={'entertainment'}>Entertainment</option>
                        <option value={'others'}>Others</option>
                    </select>
                </div>
                
            </div>

            <div>
                <label htmlFor='expenseAmount'>Expense Amount: </label>
                <input type='number' id='expenseAmount' />
            </div>
            <div>
                <input type='submit' />
            </div>
            
        </form>
    </div>
  )
}

export default NewExpenseForm