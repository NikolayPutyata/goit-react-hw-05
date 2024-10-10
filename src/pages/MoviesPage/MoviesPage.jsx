import MovieList from "../../components/MovieList/MovieList";
import { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMoviesForQueryFu } from "../../../api";
import { useLocation, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchingMovies,
  setsearchingMovies,
} from "../../redux/slices/searchMoviesSlice";
import Filters from "../../components/Filters/Filters";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();
  const dispatch = useDispatch();
  const searchingMovies = useSelector(selectSearchingMovies);

  useEffect(() => {
    const takeMoviesForQueryFu = async () => {
      try {
        const { results } = await searchMoviesForQueryFu(query);
        dispatch(setsearchingMovies(results));
      } catch {
        toast.error("Something wrong.. Try again!");
      }
    };
    takeMoviesForQueryFu();
  }, [query, dispatch]);

  const handleChangeQuery = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchForm setSearchingWord={handleChangeQuery} />
      <Filters />
      {searchingMovies.length > 0 && (
        <MovieList list={searchingMovies} state={location} />
      )}
    </>
  );
};

export default MoviesPage;
