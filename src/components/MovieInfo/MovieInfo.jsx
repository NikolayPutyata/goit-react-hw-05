import s from "./MovieInfo.module.css";

const MovieInfo = ({ poster_path, title, overview, genres }) => {
  return (
    <>
      <div className={s.mainInfo}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <div className={s.infoColumn}>
          <h3>{title}</h3>
          <h4>Overview:</h4>
          <p>{overview}</p>
          <h4>Genres:</h4>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
