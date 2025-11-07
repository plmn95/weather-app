import "./styles.css";

import { getWeather } from './weather.js'

getWeather('Sofia').then(weather => {
    if(weather) {
        console.log('Current temp in Sofia is:', weather.temp + '°C')
    }
})

const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    const location = document.querySelector('#location').value
    event.preventDefault()
    console.log(getWeather(location).then(weather => {
        if(weather) {
            console.log(`Current temp in ${location} is`, weather.temp + '°C')
        }
    }))
})