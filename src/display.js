import { getWeather } from './weather.js'

const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    const location = document.querySelector('#location').value
    event.preventDefault()
    console.log(getWeather(location).then(weather => {
        if(weather) {
            console.log(`Current temp in ${location} is`, weather.temp + '°C')
                showWeather(weather)
        }
    }))
})

export function showWeather(weather) {
    const paraLocation = document.querySelector('#para-location')
    const paraTimezone = document.querySelector('#para-timezone')
    const paraTemp = document.querySelector('#para-temperature')
    const paraConditions = document.querySelector('#para-conditions')

        if(weather) {
            paraLocation.innerText = `for: ${weather.location}`
            paraTimezone.innerText = `timezone: ${weather.timezone}`
            paraTemp.innerText = `current temp: ${weather.temp}°C`
            paraConditions.innerText = `current conditions: ${weather.currentConditions}`
        }
}