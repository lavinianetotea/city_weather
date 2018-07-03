import axios from 'axios';

const API_KEY='29131c96ff3b9f1e013b796f00011b27';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},ro`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}