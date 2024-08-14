import React, { useEffect } from 'react';
import avtar from '../images/avtar.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const user = useSelector(state => state.user);
    const selection = useSelector(state => state.categories);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            navigate('/');
        } else if (!selection || selection.length < 3) {
            navigate('/start');
        }
    }, [user, selection, navigate]); // Added dependencies to watch for changes

    return (
        <div className='flex bg-[#5746EA] p-4 h-full gap-4 rounded-2xl'>
            <div>
                <img className='h-full' src={avtar} alt='avatar-img' />
            </div>
            <div >
                <div className='text-white flex flex-col font-roboto'>
                    <p className='text-base'>{user.name}</p>
                    <p className='text-base'>{user.email}</p>
                    <p className='text-2xl font-medium'>{user.userName}</p>
                </div>
                <div className='flex flex-wrap mt-3 gap-3 ml-2 max-w-80'>
                    {selection && selection.map((val, index) => (
                        <p key={index} className='bg-[#9F94FF] text-sm rounded-[14px] px-3 text-white font-roboto'>
                            {val}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
