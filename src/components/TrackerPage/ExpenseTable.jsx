import React from 'react'

const ExpenseTable = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>Catgeory</th>
                <th>Limit Status</th>
                <th>Budget</th>
                <th>Expense</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>All</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Food</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Travel</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Entertainment</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Others</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
  )
}

export default ExpenseTable