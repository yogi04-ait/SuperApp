import React from 'react';

const InputField = ({ name, placeholder, type, value, onChange, error, inputRef, checked }) => {
    return (
        <div>
            {type === 'checkbox' ? (
                <div className="flex items-center gap-2">
                    <input
                        name={name}
                        type={type}
                        checked={checked}
                        onChange={onChange}
                        ref={inputRef}
                        className="form-checkbox cursor-pointer"
                    />
                    <label className='text-customGray'>{placeholder}</label>
                </div>
            ) : (
                <input
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    className={`p-2 outline-none font-dmsans bg-customBlack w-full text-customGray rounded-sm ${error ? 'border-red-500 border' : ''}`}
                />
            )}
            {error && <p className='text-red-500 text-xs'>{error}</p>}
        </div>
    );
};

export default InputField;
