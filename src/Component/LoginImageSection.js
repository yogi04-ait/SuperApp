import React from 'react';

const LoginImageSection = ({ imgSrc, title }) => {
    return (
        <div
            className='w-[45%] bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${imgSrc})` }}
        >
            <h1 className='text-white font-roboto font-bold mt-[75vh] leading-snug ml-[3vw] text-5xl'>{title}</h1>
        </div>
    );
};

export default LoginImageSection;
