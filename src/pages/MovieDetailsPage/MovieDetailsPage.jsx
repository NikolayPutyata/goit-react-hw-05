import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { searchMovieForId } from "../../../api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
import { BackLink } from "../../components/BackLink/BackLink";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import toast from "react-hot-toast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  const [oneMovie, setOneMovie] = useState(null);
  useEffect(() => {
    try {
      const getOneMovie = async () => {
        const movie = await searchMovieForId(movieId);
        setOneMovie(movie);
      };
      getOneMovie();
    } catch {
      toast.error("Something wrong.. Try again!");
    }
  }, [movieId]);

  if (!oneMovie) {
    return <div>Loading...</div>;
  }

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <>
      <BackLink to={goBackRef.current}>Back</BackLink>
      <MovieInfo
        poster_path={oneMovie.poster_path}
        title={oneMovie.title}
        overview={oneMovie.overview}
        genres={oneMovie.genres}
      />
      <span className={s.span}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </span>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
