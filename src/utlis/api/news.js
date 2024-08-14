// src/api/news.js
// require('dotenv').config();
// const API_KEY = process.env.NEWS_API; // Access API key from environment variables
const API_KEY = '30bfc40539ce4f5a9a834809d07319fd';
const BASE_URL = 'https://newsapi.org/v2/everything?q=keyword';

export const fetchTopHeadlines = async (country = 'us') => {
    try {
        const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        throw error;
    }
};
