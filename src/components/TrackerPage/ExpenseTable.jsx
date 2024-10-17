import React from 'react';
import { useSelector } from 'react-redux';
import LimitPills from './LimitPills';

const ExpenseTable = () => {
    const monthlyBudget = parseInt(useSelector(state => state.userReducer.monthlyBudget)) || '';
    const totalExpense = useSelector(state =>  state.expenseReducer.totalExpense);
    const categoricalBudget = useSelector(state => state.userReducer.categoricalBudget);
    const categoricalExpense = useSelector(state => state.expenseReducer.categoricalExpense);

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
                <LimitPills totalAmount={monthlyBudget} expenseAmount={totalExpense} />
                <td>{monthlyBudget}</td>
                <td>{totalExpense}</td>
                <td>{monthlyBudget - totalExpense}</td>
            </tr>
            <tr>
                <td>Food</td>
                <LimitPills totalAmount={categoricalBudget.food} expenseAmount={categoricalExpense.food} />
                <td>{categoricalBudget.food}</td>
                <td>{categoricalExpense.food}</td>
                <td>{categoricalBudget.food - categoricalExpense.food}</td>
            </tr>
            <tr>
                <td>Travel</td>
                <LimitPills totalAmount={categoricalBudget.travel} expenseAmount={categoricalExpense.travel} />
                <td>{categoricalBudget.travel}</td>
                <td>{categoricalExpense.travel}</td>
                <td>{categoricalBudget.travel - categoricalExpense.travel}</td>
            </tr>
            <tr>
                <td>Entertainment</td>
                <LimitPills totalAmount={categoricalBudget.entertainment} expenseAmount={categoricalExpense.entertainment} />
                <td>{categoricalBudget.entertainment}</td>
                <td>{categoricalExpense.entertainment}</td>
                <td>{categoricalBudget.entertainment - categoricalExpense.entertainment}</td>
            </tr>
            <tr>
                <td>Others</td>
                <LimitPills totalAmount={categoricalBudget.others} expenseAmount={categoricalExpense.others} />
                <td>{categoricalBudget.others}</td>
                <td>{categoricalExpense.others}</td>
                <td>{categoricalBudget.others - categoricalExpense.others}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default ExpenseTable