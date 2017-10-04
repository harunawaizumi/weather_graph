import axios from 'axios'
const API_KEY = 'ec61628a26582d0867f3436259c036bd'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'
// must to create

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const response = axios.get(url)
    console.log('response', response)
    return {
        type: FETCH_WEATHER,
        payload: response
    }
}
// middleware: action が　reducersに送られる前に行うstoreのbouncerの役割 gateKeeperの役割
// payload:　特定のactionを指定するデータ

// url & api is so important to fetch data
