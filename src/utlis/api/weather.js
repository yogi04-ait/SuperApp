
const API_KEY = '2a64d00cc8f1440fa21164523241408';
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
