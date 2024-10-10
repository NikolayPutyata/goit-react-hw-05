import { configureStore } from "@reduxjs/toolkit";
import { mainMovieReducer } from "./slices/moviesSlice";
import { mainSearchingMovieReducer } from "./slices/searchMoviesSlice";

export const store = configureStore({
  reducer: {
    movies: mainMovieReducer,
    searchingMovies: mainSearchingMovieReducer,
  },
});
