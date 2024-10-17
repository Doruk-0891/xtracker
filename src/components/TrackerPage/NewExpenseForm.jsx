import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../reducers/transactionsSlice';
import { v4 as uuidv4 } from 'uuid';
import { updateCategoricalExpense, updateTotalExpense } from '../../reducers/expenseSlice';

const NewExpenseForm = () => {
    const dispatch = useDispatch();
    const [expenseName, setExpenseName] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Do you want to add new Expense?');
        
        dispatch(addTransaction({id: uuidv4(), expenseName, expenseAmount, expenseCategory}));

        dispatch(updateCategoricalExpense({amount: expenseAmount, category: expenseCategory, operation:'add'}));
        
        dispatch(updateTotalExpense({amount: expenseAmount, operation: 'add'}));

        setExpenseName('');
        setExpenseAmount('');
        setExpenseCategory('');

        alert('Expense added succesfully');
    }

  return (
    <div className='expense-form-container'>
        <h2 className='title'>New Expense Form</h2>
        <form id='expense-form1' onSubmit={handleSubmit}>
            <div className='expense-form-input'>
                <div>
                    <label htmlFor='expense-name'>Expense Name: </label>
                    <input id='expense-name' type='text' value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
                </div>
                
                <div>
                    <label htmlFor='category-select'>Select Category: </label>
                    <select id='category-select' value={expenseCategory} onChange={(e) =>setExpenseCategory(e.target.value)}>
                        <option value="" disabled>--select--</option>
                        <option value={'Food'}>Food</option>
                        <option value={'Travel'}>Travel</option>
                        <option value={'Entertainment'}>Entertainment</option>
                        <option value={'Others'}>Others</option>
                    </select>
                </div>
                
            </div>

            <div>
                <label htmlFor='expense-amount'>Expense Amount: </label>
                <input type='number' id='expense-amount' value={expenseAmount} onChange={(e) => e.target.value==='' ? setExpenseAmount('') : setExpenseAmount(parseInt(e.target.value))} />
            </div>
            <div>
                <input type='submit' />
            </div>
            
        </form>
    </div>
  )
}

export default NewExpenseForm