import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  searchingMovies: [],
  originalMovies: [],
};

export const moviesSlice = createSlice({
  name: "searchingMovies",
  initialState: initialValues,
  reducers: {
    setsearchingMovies: (state, action) => {
      state.originalMovies = action.payload;
      state.searchingMovies = action.payload;
    },
    searchFilterForAverage: (state) => {
      state.searchingMovies = state.searchingMovies.sort(
        (a, b) => b.vote_average - a.vote_average
      );
    },
    searchFilterForCount: (state) => {
      state.searchingMovies = state.searchingMovies.sort(
        (a, b) => b.vote_count - a.vote_count
      );
    },
    resetFilters: (state, action) => {
      state.searchingMovies = [...state.originalMovies];
    },
  },
});

export const mainSearchingMovieReducer = moviesSlice.reducer;
export const {
  searchFilterForAverage,
  setsearchingMovies,
  searchFilterForCount,
  resetFilters,
} = moviesSlice.actions;

export const selectSearchingMovies = (state) =>
  state.searchingMovies.searchingMovies;
