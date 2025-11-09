import "./styles.css";

import { getWeather } from "./weather.js";
import { showWeather } from "./display.js";


document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            console.log('fetched user location')
            const weather = await getWeather(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`)
            showWeather(weather)
        },
        (error) => {
            console.log('error', error.message)
    })
})


