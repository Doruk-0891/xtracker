import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import expenseReducer from './expenseSlice.js';
import transactionsReducer from './transactionsSlice.js';


const reducersMapping = {
    userReducer,
    expenseReducer,
    transactionsReducer
};

const store = configureStore({
    reducer: reducersMapping
});

export default store;