import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {currentWeatherReducer, forecestReducer, favoritesReducer} from './features'

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecast: forecestReducer,
    favorites: favoritesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
