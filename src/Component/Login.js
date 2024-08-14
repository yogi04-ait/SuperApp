import React, { useEffect } from 'react';
import img from '../images/img.png'
import LoginImageSection from './LoginImageSection';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/userSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);
    const selection = useSelector(state => state.categories);

    useEffect(() => {
        if (Object.keys(userData).length === 0) {
            // If userData is empty, redirect to home page
            navigate('/');
        } else if (selection.length < 3) {
            // If userData is not empty but selection length is less than 3, redirect to start page
            navigate('/start');
        } else {
            // If none of the above conditions are true, redirect to homepage
            navigate('/home');
        }

    }, [userData, selection, navigate])

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
