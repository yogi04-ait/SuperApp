import React from 'react';

const InputField = ({ name, placeholder, type, value, onChange, error, inputRef }) => {
    return (
        <div>
            <input
                className='p-2 outline-none font-dmsans bg-customBlack w-full text-customGray rounded-sm'
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                ref={inputRef}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;
