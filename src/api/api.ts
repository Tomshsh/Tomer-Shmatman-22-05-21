import axios, { AxiosResponse } from 'axios'
import { ForecastDto, LocationDto } from '../types'

const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const baseUrl = "http://dataservice.accuweather.com/"

const citiesAutocomplete = "locations/v1/cities/autocomplete"

const fiveDayForecast = "/forecasts/v1/daily/5day/"

const metric = "&metric=true"

const cors = "https://glacial-badlands-08589.herokuapp.com/"

const client = {
    getCities: (searchWord: string):Promise<AxiosResponse<LocationDto[]>> => axios.get(cors+baseUrl+citiesAutocomplete+"?apikey="+apiKey+"&q="+searchWord),
    getForecast: (locationKey: string):Promise<AxiosResponse<ForecastDto>> => axios.get(cors + baseUrl+fiveDayForecast+locationKey+apiKey+metric)
}



export default client