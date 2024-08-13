import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Function to update the time every second
        const updateTime = () => setCurrentTime(new Date());

        // Set an interval to update time every second
        const timerId = setInterval(updateTime, 60000);

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
        <div className="bg-[#FF4ADE] px-10 rounded-t-lg py-1 text-white text-justify  shadow-md z-50">
            <div className="flex justify-between items-center gap-12 font-semibold "> {/* Tailwind gap for spacing */}
                <span className="text-lg">{date}</span>
                <span className="text-lg">{time}</span>
            </div>
        </div>
    );
};

export default DateTimeDisplay;
