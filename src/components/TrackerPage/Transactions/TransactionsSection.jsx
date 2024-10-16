import React from 'react'
import TransactionsFilters from './TransactionsFilters'
import TransactionsTable from './TransactionsTable'

const TransactionsSection = () => {
  return (
    <div>
        <TransactionsFilters />
        <TransactionsTable />
    </div>
  )
}

export default TransactionsSection