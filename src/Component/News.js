import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../utlis/api/news';
import ClipLoader from "react-spinners/ClipLoader";
import { IoReload } from "react-icons/io5";



const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getHeadlines = async () => {
        if(error){
            setLoading(true);
        }
        try {
            const data = await fetchTopHeadlines();
            setNews(data.articles);
        } catch (err) {
            setError('Failed to fetch headlines.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {


        getHeadlines();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
        }, 30000); // Change every 30 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [news]);

    if (loading) {
        return (
            <div className="w-full h-full flex rounded-lg justify-center items-center ">
                <ClipLoader color='#7358FF' />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full flex flex-col justify-center bg-gray-100 items-center font-bold rounded-lg text-gray-800 mb-4">
                <p>{error}</p>
                <button onClick={getHeadlines} className='font-bold pt-5 text-2xl'><IoReload /></button>
            </div>
        );
    }


    // Function to format the publishedAt date
    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        const month = dateObj.getMonth() + 1; // Months are zero-based
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        let hours = dateObj.getHours();
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${month}-${day}-${year} | ${hours}:${minutes} ${ampm}`;
    };

    const currentNews = news[currentIndex]; // Get the current news item based on the index

    return (
        <div className='w-full h-full rounded-lg'>
            <div className="relative">
                <img src={currentNews?.urlToImage} alt="Article Image" className="w-full h-[45vh] object-cover rounded-t-lg" />
                <div className="absolute bottom-0 w-full  bg-[rgba(0,0,0,0.6)] text-white p-5">
                    <h2 className="text-xl font-bold pb-2">{currentNews?.title}</h2>
                    <p className="text-base font-semibold">{currentNews ? formatDate(currentNews?.publishedAt) : ''}</p>
                </div>
            </div>

            <div className='pt-6 p-4'>
                <p>{currentNews?.content}</p>
            </div>
        </div>
    );
};

export default NewsComponent;
