import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ list, state }) => {
  return (
    <>
      <ul className={s.movieList}>
        {list.map(({ title, id, poster_path, vote_average, vote_count }) => (
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

              <p>Total votes: {vote_count}</p>
              <p>Rating: {vote_average}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
