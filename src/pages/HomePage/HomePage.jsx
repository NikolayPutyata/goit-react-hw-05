import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchTrendingMoviesFu } from "../../../api";
import s from "./HomePage.module.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, setMovies } from "../../redux/slices/moviesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const { results } = await searchTrendingMoviesFu();

        dispatch(setMovies(results));
      };
      getTrendingMovies();
    } catch {
      toast.error("Something wrong.. Try again!");
    }
  }, [dispatch]);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <MovieList list={movies} />
    </>
  );
};

export default HomePage;
