import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ list, state }) => {
  return (
    <>
      <ul className={s.movieList}>
        {list.map(({ title, id, poster_path }) => (
          <Link to={`/movies/${id}`} key={id} state={state}>
            <li className={s.movieItem}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
                }
                alt={title}
              />
              <h4>{title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
