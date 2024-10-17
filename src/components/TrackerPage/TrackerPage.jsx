import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ExpenseTable from './ExpenseTable';
import NewExpenseForm from './NewExpenseForm';
import TransactionsSection from './Transactions/TransactionsSection';

const TrackerPage = () => {
  const navigate = useNavigate();
  const userName = useSelector(state => state.userReducer.userName);

  const navigateToNewTrackerPage = () => {
    navigate('/');
  }

  return (
    <div className='tracker-container'>
      <div className='header'>
        <h2>{userName}'s Monthly Expenditure</h2>
        <button id='new-update' onClick={navigateToNewTrackerPage}>New/Update Tracker</button>
      </div>
      <ExpenseTable />
      <hr />
      <NewExpenseForm />
      <hr />
      <TransactionsSection />
    </div>
  )
}

export default TrackerPage