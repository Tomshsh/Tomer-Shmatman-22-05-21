import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    favorites: [],
    status: "idle",
    error: null 
}

const favoritesSlice = createSlice({
    name:"favorites",
    initialState,
    reducers:{
        favoriteAdded(state, action){
            //@ts-ignore
            state.favorites.push(action.payload)
        }
    }
})

export const {favoriteAdded} = favoritesSlice.actions

export default favoritesSlice.reducer