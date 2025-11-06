class WeatherInfo {
    constructor(temp, conditions) {
        this.temp = temp
        this.currentConditions = conditions
    }
}

export async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=W9WUULQWEDG9XA9CS73S5EWKY`)
    const data = await response.json()
    console.log(data.currentConditions)
    return new WeatherInfo(
        data.currentConditions.temp, 
        data.currentConditions.conditions)
}