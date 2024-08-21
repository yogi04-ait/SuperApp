import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../utlis/api/weather';
import { FaThermometerHalf } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";




const DateTimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentWeather, setCurrentWeather] = useState([]);
    const [city, setCity] = useState('del');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        if (error) {
            setLoading(true);
        }
        try {
            const data = await fetchWeather(city);
            setCurrentWeather(data.current);
        } catch (err) {
            setError('Failed to fetch headlines.');
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {

        // Fetch weather 
        getWeather();

        // Function to update the time every second
        const updateTime = () => setCurrentTime(new Date());


        // Set an interval to update time every second
        const timerId = setInterval(updateTime, 9000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []);

    const formatDateTime = (date) => {
        const day = String(date.getDate()).padStart(2, '0');  // Ensure two digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const formattedHours = String((hours % 12) || 12).padStart(2, '0');
        return {
            date: `${day}-${month}-${year}`,
            time: `${formattedHours}:${minutes} ${ampm}`
        };
    };

    const { date, time } = formatDateTime(currentTime);



    return (
        <div className='w-full  h-full'>
            <div className="bg-[#FF4ADE] px-10 rounded-t-lg py-1 text-white text-justify  shadow-md z-50">
                <div className="flex justify-between items-center gap-12 font-semibold "> {/* Tailwind gap for spacing */}
                    <span className="text-lg">{date}</span>
                    <span className="text-lg">{time}</span>
                </div>

            </div>
            <div className='flex justify-evenly items-center max-h-full px-2 text-white'>
                <div className='flex flex-col items-center '>
                    <img src={currentWeather?.condition?.icon} alt="Weather Icon" />
                    <p className='text-xs text-wrap w-24 leading-3  '>{currentWeather?.condition?.text}</p>
                </div>

                <div className='h-10 border-r border-white'></div>
                <div className='flex flex-col'>
                    <p className='text-4xl font-normal mb-2 mt-2'>{currentWeather?.temp_c}℃</p>
                    <div className='flex gap-2' ><FaThermometerHalf className='self-center' />
                        <div className='flex flex-col text-xs'>
                            {Math.floor(currentWeather?.pressure_mb)} mbar
                            <p>pressure</p>
                        </div></div>
                </div>
                <div className='h-10 border-r border-white'></div>

                <div className='flex flex-col gap-4 mt-3'>
                    <div className='flex flex-col font-light text-xs '>
                        <div className='flex gap-5 '><FaWind className='text-xl font-thin' />
                            <div className='flex flex-col gap-0'>
                                {currentWeather?.wind_kph} km/h
                                <p>wind</p>
                            </div>
                        </div>
                        <div className='flex mt-1 gap-2'>
                            <WiHumidity className='text-3xl' />
                            <div className='flex flex-col text-xs'>
                                {currentWeather?.humidity}%
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateTimeDisplay;
