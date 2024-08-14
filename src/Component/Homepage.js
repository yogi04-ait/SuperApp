import React from 'react'
import Profile from './Profile';
import CountdownTimer from './CountdownTimer';
import DateTimeDisplay from './DateTimeDisplay';
import NotesApp from './NotesApp';
import { useDispatch } from 'react-redux';
import { removeUser } from '../features/userSlice';
import { resetNote } from '../features/notesSlice';
import { resetCategory } from '../features/categorySlice';
import NewsComponent from './News';

const Homepage = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(removeUser());
        dispatch(resetNote());
        dispatch(resetCategory());
    }

    return (
        <div className='bg-black px-10 h-screen pb-10 py-5 flex gap-5'>
            <div className=' w-[68%] flex flex-col gap-5'>
                <div className=' flex gap-5 h-2/3 w-full '>
                    <div className='w-[55%] gap-7 flex flex-col'>
                        <div className='bg-[#5746EA] h-[55%] rounded-lg '>
                            <Profile />
                        </div>
                        <div className='bg-[#101744] rounded-lg h-[45%]'>
                            <DateTimeDisplay />
                        </div>
                    </div>
                    <div className='w-[45%] rounded-lg bg-[#F1C75B]'>
                        <NotesApp />
                    </div>
                </div>
                <div className='bg-[#1E2343] rounded-lg h-1/3 w-full'>
                    <CountdownTimer />
                </div>
            </div>
            <div className='flex flex-col  gap-5 w-[32%] '>
                <div className='bg-white rounded-lg h-full w-full'>
                    <NewsComponent />
                </div>
                <div className='flex gap-9 -mb-5 justify-end align-bottom'>
                    <button onClick={logoutUser} className='bg-customBlue text-white py-1 overflow-hidden  px-7 rounded-2xl'>Logout</button>
                    <button className='bg-customDarkGreen text-white py-1 px-7 rounded-2xl'>Browse</button>
                </div>

            </div>
        </div>
    )
}

export default Homepage