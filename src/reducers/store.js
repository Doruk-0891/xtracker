import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';


const reducersMapping = {
    userReducer,
};

const store = configureStore({
    reducer: reducersMapping
});

export default store;