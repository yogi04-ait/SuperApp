import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categorySlice';
import userReducer from './userSlice';
import { loadState, saveState } from './localStorage';

// Load the initial state from local storage
const preloadedState = loadState();

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        user: userReducer,
    },
    preloadedState
});

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
    saveState({
        categories: store.getState().categories,
        user: store.getState().user,
    });
});

export default store;
