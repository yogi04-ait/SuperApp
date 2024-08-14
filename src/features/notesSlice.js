// features/notes/notesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        note: ''
    },
    reducers: {

        setNote: (state, action) => {
            state.note = action.payload; // Replace the note entirely
        },
        resetNote:(state,action)=>{
            state.note = '';
        }
    }

});

export const { resetNote, setNote } = notesSlice.actions;
export default notesSlice.reducer;
