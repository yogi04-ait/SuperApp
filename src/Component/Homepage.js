import React from 'react'
import Profile from './Profile';
import CountdownTimer from './CountdownTimer';
import DateTimeDisplay from './DateTimeDisplay';
import NotesApp from './NotesApp';

const Homepage = () => {

    return (
        <div className='bg-black px-10 h-screen pb-10 py-5 flex gap-5'>
            <div className=' w-[68%] flex flex-col gap-4'>
                <div className=' flex gap-5 h-2/3 w-full '>
                    <div className='w-[55%] gap-5  flex flex-col'>
                        <div className='bg-[#5746EA] h-[60%] rounded-lg '>
                            <Profile />
                        </div>
                        <div className='bg-[#101744] rounded-lg h-[40%]'>
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
            <div className='bg-white rounded-lg w-[32%]'>

            </div>
        </div>
    )
}

export default Homepage