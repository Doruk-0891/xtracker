import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import expenseReducer from './expenseSlice.js';
import transactionReducer from './transactionsSlice.js';


const reducersMapping = {
    userReducer,
    expenseReducer,
    transactionReducer
};

const store = configureStore({
    reducer: reducersMapping
});

export default store;