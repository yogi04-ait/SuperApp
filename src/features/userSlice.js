import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userInfo',
    initialState:{},
    reducers:{
        addUser: (state,action)=>{
            return action.payload;
        },
        removeUser: (state,action)=>{
            return {};
        },
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;