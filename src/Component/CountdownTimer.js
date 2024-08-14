import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const CountdownTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const total = hours * 3600 + minutes * 60 + seconds;
        setTotalSeconds(total);
        setRemainingTime(total);
    }, [hours, minutes, seconds]);

    useEffect(() => {
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            setIsActive(false);
        }
    }, [remainingTime, intervalId]);

    useEffect(() => {
        if (isActive) {
            const id = setInterval(() => {
                setRemainingTime(prevTime => Math.max(prevTime - 1, 0));
            }, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [isActive]);

    const handleStartPause = () => {
        setIsActive(prev => !prev);
    };

    const handleSetHours = (delta) => setHours(prev => Math.max(prev + delta, 0));
    const handleSetMinutes = (delta) => setMinutes(prev => Math.max(prev + delta, 0));
    const handleSetSeconds = (delta) => setSeconds(prev => Math.max(prev + delta, 0));

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
    };

    // Calculate the percentage for filling up
    const elapsedTime = totalSeconds - remainingTime;
    const percentage = (elapsedTime / totalSeconds) * 100;

    return (
        <div className="flex justify-between px-10 items-center h-full p-2 bg-[#1E2343] text-white rounded-lg shadow-lg">
            <div className="w-40 h-40 mr-2 p-2 bg-[#191E39] rounded-full">
                <CircularProgressbar
                    value={percentage}
                    text={formatTime(remainingTime)}
                    styles={buildStyles({
                        pathColor: `#FF6A6A`,
                        textColor: '#fff',
                        trailColor: '#191E39',
                        strokeLinecap: 'round',
                        textSize: '14px',
                        // Set the thickness (stroke width) here
                        strokeWidth: 4, // Adjust this value to set the thickness
                    })}
                />
            </div>
            <div className='flex flex-col pr-16'>
                <div className="flex gap-7 mb-2">
                    <div className="flex flex-col items-center">
                        <span className="text-lg text-customGray font-semibold">Hours</span>
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleSetHours(1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropup /></button>
                            <span className="text-2xl text-white">{hours.toString().padStart(2, '0').split('').join(' ')}</span>
                            <button onClick={() => handleSetHours(-1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropdown /></button>
                        </div>
                    </div>
                    <div className='relative top-16 text-[#fff]'>:</div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg text-customGray font-semibold">Minutes</span>
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleSetMinutes(1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropup /></button>
                            <span className='text-2xl text-[#fff]'>{minutes.toString().padStart(2, '0').split('').join(' ')}</span>
                            <button onClick={() => handleSetMinutes(-1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropdown /></button>
                        </div>
                    </div>
                    <div className='relative top-16 text-[#fff]'>:</div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg text-customGray font-semibold">Seconds</span>
                        <div className="flex flex-col items-center">
                            <button onClick={() => handleSetSeconds(1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropup /></button>
                            <span className='text-2xl text-[#fff]'>{seconds.toString().padStart(2, '0').split('').join(' ')}</span>
                            <button onClick={() => handleSetSeconds(-1)} className="px-1 text-3xl text-customGray font-bold"><IoMdArrowDropdown /></button>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleStartPause}
                    className={`p-1 bg-[#FF6A6A] text-lg tracking-wider text-white font-medium rounded-3xl`}
                >
                    {isActive ? 'Pause' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;
