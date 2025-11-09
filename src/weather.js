class WeatherInfo {
    constructor(temp, conditions, timezone) {
        this.temp = temp
        this.currentConditions = conditions
        this.timezone = timezone
    }
}

export async function getWeather(location) {
    
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?`
                                + "unitGroup=metric"
                                + "&include=current"
                                + "&key=W9WUULQWEDG9XA9CS73S5EWKY"
                                + "&contentType=json")

    if(!response.ok) {
        console.log('issue with city')
        return null
    }
                            
    const data = await response.json()
    console.log(data)
    console.log(`found ${data.resolvedAddress}`)
    return new WeatherInfo(
        data.currentConditions.temp, 
        data.currentConditions.conditions,
        data.timezone)
}

navigator.geolocation.getCurrentPosition(
    (location) => {
        console.log('fetched user location')
        const coords = (`${location.coords.latitude}, ${location.coords.longitude}`)
        console.log(coords)
        getWeather(coords)
    },
    (error) => {
        console.log('error', error.message)
    })