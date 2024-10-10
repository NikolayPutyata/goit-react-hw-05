import { createSlice } from "@reduxjs/toolkit";

const initailValues = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initailValues,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    filter: (state, action) => {
      state.movies.filter((movie) => movie);
    },
  },
});

export const mainMovieReducer = moviesSlice.reducer;
export const { filter, setMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
