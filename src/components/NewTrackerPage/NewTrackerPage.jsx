import React from 'react'
import './style.css';
import BalanceTable from './BalanceTable/BalanceTable';
import {useSelector, useDispatch} from 'react-redux';
import {updateUserName, updateMonthlyBudget, updateCategoricalBudget, resetAllBudgetChanges} from '../../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { resetAllTransactions } from '../../reducers/transactionsSlice';
import { resetAllExpenseChanges } from '../../reducers/expenseSlice';

const NewTrackerPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(state => state.userReducer.userName);
    const monthlyBudget = useSelector(state => state.userReducer.monthlyBudget);
    const categoricalBudget = useSelector(state => state.userReducer.categoricalBudget);

    const setUserName = (e) => dispatch(updateUserName(e.target.value));

    const setMonthlyBudget = (e) => {
        if (e.target.value === '') {
            dispatch(updateMonthlyBudget(''));
        } else {
            dispatch(updateMonthlyBudget(parseInt(e.target.value)));
        }
    } 

    const setCategoricalBudget = (amount, category) => {
        if (amount !== '') {
            amount = parseInt(amount);
        }
        dispatch(updateCategoricalBudget({[category]: amount}));
    }

    const handleSubmit = () => {
        if (!handleValidation()) {
            return;
        }
        const othersCategoricalBudget = monthlyBudget - getCategoricalBudgetSum();

        setCategoricalBudget(othersCategoricalBudget, 'others');
        navigate('/tracker');
    }

    const handleValidation = () => {
        let isValidationPassed = true;
        if (userName === '' || monthlyBudget === '' || categoricalBudget['food'] === '' || categoricalBudget['travel'] === '' || categoricalBudget['entertainment'] === '') {
            alert('Fill all the details');
            isValidationPassed = false;
        } else if (monthlyBudget <= 0) {
            alert('The total budget must be > 0.');
            isValidationPassed = false;
        } else if (getCategoricalBudgetSum() > monthlyBudget) {
            alert("Total Categorical budget should not exceed monthly budget");
            isValidationPassed = false;
        }
        return isValidationPassed;
    }

    const getCategoricalBudgetSum = () => categoricalBudget['food']+categoricalBudget['travel']+categoricalBudget['entertainment'];
    

    const startNewTracker = () => {
        alert('This will delete all previous transactions');
        dispatch(resetAllBudgetChanges());
        dispatch(resetAllTransactions());
        dispatch(resetAllExpenseChanges());
    }

    const navigateToTrackerPage = () => navigate('/tracker');

  return (
    <div className='container'>
        <h2>Welcome to your own Expense Tracker</h2>
        <h4>Please fill in the form below to start tracking</h4>
        <form name='landing-page-form' className='form-container' onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor='name'>Enter your name: </label>
                <input id='name' type='text' required value={userName} onChange={setUserName} />
            </div>

            <div>
                <label htmlFor='budget'>Enter your monthly budget: </label>
                <input type='number' id='budget'required  value={monthlyBudget} onChange={setMonthlyBudget} />
            </div>

            <BalanceTable categoricalBudget={categoricalBudget} setCategoricalBudget={setCategoricalBudget} />

            <div className='btn-container'>
                <button onClick={handleSubmit}>
                {
                    categoricalBudget['others'] !== '' ? 'Update Budget' : 'Submit'
                }
                </button>  
                {
                    categoricalBudget['others'] !== '' && 
                    <>
                        <button id='clear' onClick={startNewTracker}>Start New Tracker</button>          
                        <button onClick={navigateToTrackerPage}>Go back</button>
                    </>
                }
            </div>
            
        </form>
    </div>
  )
}

export default NewTrackerPage