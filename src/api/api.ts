import axios, { AxiosResponse } from 'axios'
import { ForecastDto, LocationDto } from '../types'

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const baseUrl = "http://dataservice.accuweather.com/"

const citiesAutocomplete = "locations/v1/cities/autocomplete/"

const fiveDayForecast = "/forecasts/v1/daily/5day/"

const metric = "&metric=true"

const client = {
    getCities: (searchWord: string):Promise<AxiosResponse<LocationDto[]>> => axios.get(baseUrl+citiesAutocomplete+apiKey),
    getForecast: (locationKey: string):Promise<AxiosResponse<ForecastDto>> => axios.get(baseUrl+fiveDayForecast+locationKey+apiKey+metric)
}



export default client