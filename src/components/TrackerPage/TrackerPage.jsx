import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ExpenseTable from './ExpenseTable';

const TrackerPage = () => {
  const navigate = useNavigate();
  const userName = useSelector(state => state.userReducer.userName);

  const navigateToNewTrackerPage = () => {
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2>{userName}'s Monthly Expenditure</h2>
        <button onClick={navigateToNewTrackerPage}>New/Update Tracker</button>
      </div>
      <ExpenseTable />
    </div>
  )
}

export default TrackerPage