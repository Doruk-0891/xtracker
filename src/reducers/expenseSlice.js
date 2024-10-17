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
            const {amount, operation} = action.payload;
            if (operation === 'add') {
                state.totalExpense += parseInt(amount);
            } else {
                state.totalExpense -= parseInt(amount);
            }
        },

        updateCategoricalExpense: (state, action) => {
            let {amount, category, operation} = action.payload;

            category = category.toLowerCase();
            if (operation === 'add') {
                state.categoricalExpense[category] += parseInt(amount);
            } else {
                state.categoricalExpense[category] -= parseInt(amount);
            }
        },

        resetAllExpenseChanges: (state, action) => {
            state = {
                totalExpense: 0,
                categoricalExpense: {
                    'food': 0,
                    'travel': 0,
                    'entertainment': 0,
                    'others': 0
                }
            };
        }
    }
});

export const {updateTotalExpense, updateCategoricalExpense, resetAllExpenseChanges} = expenseSlice.actions;

export default expenseSlice.reducer;