import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import favoriteReducer from "../features/movies/moviesSlice";
import profileReducer from "../features/profile/profileSlice";
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        favoriteMovies: favoriteReducer,
        profileData : profileReducer
    }
})