import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmUyNjVlZjM1NTg5NDRhOGY4OTlmN2Q1MjI4OGE4OSIsIm5iZiI6MTcyNzUxNjA0OC41Mzk3NzgsInN1YiI6IjY2ZjdjY2Q5MjcxMjAwNDkyZWNjMDA4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3qHUolH6xznRX3qq9rbiIqijxMdmKNwEGs5uGUaZ-f4",
  },
};

const searchMoviesForQueryFu = async (query) => {
  const response = await axios.get(`/3/search/movie?query=${query}`, options);
  return response.data;
};

const searchTrendingMoviesFu = async () => {
  const response = await axios.get(
    `/3/trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

const searchMovieForId = async (id) => {
  const response = await axios.get(`/3/movie/${id}?language=en-US`, options);
  return response.data;
};

const getMoreInfoFu = async (id, word) => {
  const response = await axios.get(
    `/3/movie/${id}/${word}?language=en-US`,
    options
  );
  return response.data;
};

export {
  searchTrendingMoviesFu,
  searchMoviesForQueryFu,
  searchMovieForId,
  getMoreInfoFu,
};
