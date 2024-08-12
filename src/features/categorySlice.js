import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name:'categories',
    initialState:[],
    reducers:{
        addCategory:(state,action)=>{
            state.push(action.payload);
        },
        removeCategory: (state, action) => {
           return state.filter(cat => cat !== action.payload);
        },
    }
})

export const {addCategory, removeCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;