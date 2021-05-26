import axios from 'axios'

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const baseUrl = "http://dataservice.accuweather.com/"

const citiesAutocomplete = "locations/v1/cities/autocomplete/"

const fiveDayForecast = "/forecasts/v1/daily/5day/"

const client = {
    getCities: () => axios.get(baseUrl+citiesAutocomplete+apiKey),
    getForecest: (locationKey: string) => axios.get(baseUrl+fiveDayForecast+locationKey+apiKey)
}



export default client