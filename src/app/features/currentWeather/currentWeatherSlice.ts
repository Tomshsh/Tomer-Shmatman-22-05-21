import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: {},
    status: 'idle',
    error: null
}

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        weatherAdded(state, action){
            state.currentWeather = action.payload
        }
    }
})

export const {weatherAdded} = currentWeatherSlice.actions

export default currentWeatherSlice.reducer