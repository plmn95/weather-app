import "./styles.css";

import { getWeather } from './weather.js'

getWeather('Sofia').then(weather => {
    if(weather) {
        console.log('Current temp in Sofia is:', convertToCelsius(weather.temp) + '°C')
    }
})

function convertToCelsius(temp) {
    return ((5 / 9) * (temp - 32)).toFixed(1)
}