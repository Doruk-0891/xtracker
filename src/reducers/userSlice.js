import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userReducer',
    initialState: {
        userName: '',
        monthlyBudget: '',
        categoricalBudget: {
            'food': '',
            'travel': '',
            'entertainment': '',
            'others': ''
        }
    },
    reducers: {
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },

        updateMonthlyBudget: (state, action) => {
            state.monthlyBudget = action.payload;
        },

        updateCategoricalBudget: (state, action) => {
            state.categoricalBudget = {...state.categoricalBudget, ...action.payload};
        },

        resetAllBudgetChanges: (state, action) => {
            state = {
                userName: '',
                monthlyBudget: '',
                categoricalBudget: {
                    'food': '',
                    'travel': '',
                    'entertainment': '',
                    'others': ''
                }
            };
            return state;
        }
    }
});

export const {updateUserName, updateMonthlyBudget, updateCategoricalBudget, resetAllBudgetChanges} = userSlice.actions;

export default userSlice.reducer;