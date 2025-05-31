import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./moviesSlice";
import { useEffect } from "react";
import MovieCard from "../../components/MovieCard";

export default function MoviesList() {
    const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'space-between',gap: '20px' }}>
      {
        movies != null &&
        movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
         ))
      }
    </div>
  )
}
