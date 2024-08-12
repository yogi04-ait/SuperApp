import React from 'react';
import img from '../images/img.png'
import LoginImageSection from './LoginImageSection';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormSubmit = (formData) => {
        // console.log(formData)
        dispatch(addUser(formData));
        navigate('/start');
        // Handle form submission or pass data to parent component
    };

    return (
        <div className='flex bg-black h-screen'>
            <LoginImageSection imgSrc={img} title="Discover new things on SuperApp" />
            <div className='w-1/2 flex flex-col items-center gap-2 mt-4'>
                <h2 className='font-singleDay text-customGreen font-normal text-4xl'>Super App</h2>
                <p className='dmSans text-white font-normal text-sm'>Create your new account</p>
                <LoginForm onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};

export default Login;
