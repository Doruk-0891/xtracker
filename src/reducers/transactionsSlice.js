import {createSlice} from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
    name: 'transactionsReducers',
    initialState: {
        transactions: []
    },
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        }
    }
});

export const {addTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;