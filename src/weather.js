class WeatherInfo {
    constructor(temp, conditions) {
        this.temp = temp
        this.currentConditions = conditions
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
        data.currentConditions.conditions)
}