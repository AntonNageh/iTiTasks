import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../features/movies/moviesSlice";

export default function MovieDetail() {
    const [selectedMovie, setSelectedMovie] = useState({});
    const params = useParams();
    const dispatch = useDispatch();
    const movies = useSelector((state) =>   
  {console.log("Redux state:", state);
  return state.movies.list;});
  useEffect(() => {
     if (!movies || movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies]);
  useEffect(() => {
    const movie = movies.find((movie) => String(movie.id) === String(params.id));
    setSelectedMovie(movie || {});
  }, [movies, params.id]);
  return (
    <div style={{display: 'flex',flexDirection: 'column' , flexWrap: 'wrap', padding: '20px', justifyContent: 'center', alignContent:'center' ,gap: '20px' }}>
      <h1>{selectedMovie.title}</h1>
      {selectedMovie && Object.keys(selectedMovie).length > 0 ? (
        <MovieCard movie={selectedMovie} button={true} />
      ) : (
        <div>Movie not found.</div>
      )}
    </div>
  );
}
