import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseReducer',
    initialState: {
        totalExpense: 0,
        categoricalExpense: {
            'food': 0,
            'travel': 0,
            'entertainment': 0,
            'others': 0
        }
    },
    reducers: {
        updateTotalExpense: (state, action) => {
            const {amount} = action.payload;
            state.totalExpense = amount;
        },

        updateCategoricalExpense: (state, action) => {
            const {amount, category} = action.payload;
            state.categoricalExpense[category] = amount;
        }
    }
});

export const {updateTotalExpense, updateCategoricalExpense} = expenseSlice.actions;

export default expenseSlice.reducer;