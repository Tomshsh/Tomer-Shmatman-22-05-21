import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../api/api";

const initialState = {
    forecast: [],
    status: 'idle',
    error: null
}

const forecastSlice = createSlice({
    name: "forecasts",
    initialState,
    reducers: {
        forecastAdded(state, action) {
            state.forecast = action.payload
        }
    }
})

export const { forecastAdded } = forecastSlice.actions

export const getForecast = createAsyncThunk('currentWeather/getForecast', async (locationKey: string) => {
    const response = await client.getForecast(locationKey)
    return response.data
})

export default forecastSlice.reducer