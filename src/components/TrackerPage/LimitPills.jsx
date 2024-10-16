import React from 'react'
import './style.css'

const LimitPills = (props) => {
    const {totalAmount, expenseAmount} = props;
  return (
    <div className={`${totalAmount - expenseAmount > 0 ? 'green' : 'red'} pills`}>
        {
            totalAmount - expenseAmount > 0 ? 'within' : 'exceed'
        }
    </div>
  )
}

export default LimitPills