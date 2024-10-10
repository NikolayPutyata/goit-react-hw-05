import { useDispatch } from "react-redux";
import {
  resetFilters,
  searchFilterForAverage,
  searchFilterForCount,
} from "../../redux/slices/searchMoviesSlice";

import s from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.div}>
      <button
        className={s.button}
        onClick={() => dispatch(searchFilterForCount())}
      >
        Votes
      </button>
      <button
        className={s.button}
        onClick={() => dispatch(searchFilterForAverage())}
      >
        Rank
      </button>
      <button className={s.close} onClick={() => dispatch(resetFilters())}>
        X
      </button>
    </div>
  );
};

export default Filters;
