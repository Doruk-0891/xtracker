import {createSlice} from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactionsReducer',
    initialState: {
        transactions: [],
        filteredTransactions: []
    },
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
            state.filteredTransactions.push(action.payload);
        },
        removeTransaction: (state, action) => {
            state.transactions = state.transactions.filter((item) => item.id !== action.payload.id);

            state.filteredTransactions = state.filteredTransactions.filter(item => item.id !== action.payload.id);

            return state;
        },
        getFilteredTransaction: (state, action) => {
            if (action.payload === 'All') {
                state.filteredTransactions = state.transactions;
                return state;
            }
            state.filteredTransactions = state.transactions.filter(item => item.expenseCategory === action.payload);
            return state;
        },
        resetAllTransactions: (state,action) => {
            state = {
                transactions:[],
                filteredTransactions: []
            };
            return state;
        }
    }
});

export const {addTransaction, removeTransaction, getFilteredTransaction, resetAllTransactions} = transactionsSlice.actions;

export default transactionsSlice.reducer;