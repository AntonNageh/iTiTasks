import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

// Action creators
export const addMovie = createAction('movies/addMovie');
export const removeMovie = createAction('movies/removeMovie');
export const updateMovie = createAction('movies/updateMovie');

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await axios.get('http://localhost:3000/results');
        return response.data;
    }
);

// Initial state with a list property
const initialState = {
    list: [],
    favorites : []
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if(!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
      removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(id => id !== action.payload);
    }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addMovie, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(removeMovie, (state, action) => {
                state.list = state.list.filter((movie) => movie.id !== action.payload);
            })
            .addCase(updateMovie, (state, action) => {
                state.list = state.list.map((movie) =>
                    movie.id === action.payload.id ? action.payload : movie
                );
            });
    }
});
export const {addFavorite, removeFavorite} = moviesSlice.actions
export default moviesSlice.reducer;