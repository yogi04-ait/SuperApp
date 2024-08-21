
const API_KEY = process.env.REACT_APP_WEATHER_API;
const BASE_URL = 'http://api.weatherapi.com/v1/current.json?';

export const fetchWeather = async (country = 'us') => {
    try {
        const response = await fetch(`${BASE_URL}Key=${API_KEY}&q=${country}&aqi=no`);
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
