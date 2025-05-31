import  { useContext } from "react";
import RecipeReviewCard from "../components/Card";
import {movieContext} from "../context/UserContextProvider";
export default function Home() {
  const { movies } = useContext(movieContext);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', justifyContent: 'space-between',gap: '20px' }}>
      {
        movies?.length > 0 &&
        movies[0].map((movie, index) => (
          <RecipeReviewCard
            key={index}
            id={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            rating={movie.vote_average}
            date={movie.release_date}
            runtime={movie.runtime}
            genres={movie.genres}
            image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          />
        ))
      }
    </div>
  );
}