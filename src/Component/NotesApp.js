import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../features/notesSlice'; // Import the correct action creator

const NotesApp = () => {
    const note = useSelector((state) => state.notes.note); // Retrieve the note from Redux state
    const dispatch = useDispatch();

    // Handler for input field change
    const handleInputChange = (e) => {
        const newText = e.target.value;
        dispatch(setNote(newText)); // Update the note in Redux store in real-time
    };

    return (
        <div className="p-4 w-full h-full mx-auto bg-[#F1C75B] rounded-lg">
            <h1 className="text-3xl font-semibold font-roboto ">All notes</h1>
            <div >
                <textarea
                    value={note}
                    onChange={handleInputChange}
                    rows='8'
                    className="w-full h-full font-normal font-roboto text-lg p-2 resize-none border border-none outline-none rounded-lg bg-transparent"
                />
            </div>
        </div>
    );
};

export default NotesApp;
