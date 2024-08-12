import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categorySlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        user: userReducer,
    },
})