import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function FavoriteMovies() {

const favoriteMovies = useSelector((state) => {
  const allMovies = state.movies.list;
  const favoriteIds = state.movies.favorites;
  return allMovies.filter(movie => favoriteIds.includes(movie.id));
});

  return (
    <div>
      <h1>Favorite Movies : </h1>
      <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'center', alignContent:'center',gap: '20px' }}>
      <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '50px'}}>
        {favoriteMovies.length === 0 && <h1>No favorite movies added</h1>}
        {
        favoriteMovies.map((movie) => (
          <MovieCard movie={movie} button={true} />
        ))
        
        }
      </ul>
      </div>
    </div>
  )
}
