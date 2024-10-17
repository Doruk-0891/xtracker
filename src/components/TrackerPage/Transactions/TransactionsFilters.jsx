import React from 'react';
import {CATEGORIES} from '../../../constant';
import {useDispatch} from 'react-redux';
import { getFilteredTransaction } from '../../../reducers/transactionsSlice';

const TransactionsFilters = () => {
  const dispatch = useDispatch();

  const filterTransaction = (category) => {
    dispatch(getFilteredTransaction(category));
  }

  return (
    <div className='filters-container'>
      <span><strong>Filters: </strong></span>
      {
        CATEGORIES.map(item => <button className='filters-pills' onClick={() => filterTransaction(item)}>{item}</button>)
      }
    </div>
  )
}

export default TransactionsFilters