import React, { useState } from 'react';

const NotesApp = () => {
    const [notes, setNotes] = useState([]); // State to store the list of notes
    const [inputValue, setInputValue] = useState(''); // State to store the current input

    // Handler for adding a new note
    const handleAddNote = () => {
        if (inputValue.trim()) {
            setNotes([...notes, inputValue.trim()]);
            setInputValue(''); // Clear the input field
        }
    };

    // Handler for input field change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="p-4 w-full h-full  mx-auto bg-[#F1C75B]  rounded-lg">
            <h1 className="text-3xl font-semibold font-roboto mb-4">All notes</h1>
            <div className="mb-4 ">
                <textarea
                    value={inputValue}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full font-normal font-roboto text-lg p-2 resize-none border border-none outline-none rounded-lg bg-transparent"
                />

            </div>
            <ul className="list-disc pl-5">
                {notes.map((note, index) => (
                    <li key={index} className="mb-2">{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotesApp;
