import React from 'react'

const BalanceTable = (props) => {
    const {categoricalBudget, setCategoricalBudget} = props;
  return (
    <>
        <p>Fill in your monthly categorical budget:</p>
        <table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Travel</th>
                    <th>Entertainment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type='number' value={categoricalBudget.food} onChange={(e) => setCategoricalBudget(e.target.value, 'food')} />
                    </td>

                    <td>
                        <input type='number' value={categoricalBudget.travel} onChange={(e) => setCategoricalBudget(e.target.value, 'travel')} />
                    </td>

                    <td>
                        <input type='number' value={categoricalBudget.entertainment} onChange={(e) => setCategoricalBudget(e.target.value, 'entertainment')} />
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default BalanceTable