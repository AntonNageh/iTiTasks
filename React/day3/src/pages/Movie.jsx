import React, { useState, useEffect, useContext } from 'react'
import RecipeReviewCard from '../components/Card'
import { useParams } from 'react-router-dom'
import {movieContext} from '../context/UserContextProvider';
export default function Movie() {
  const { movies } = useContext(movieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const parms = useParams();

  useEffect(() => {
    const movie = movies.length > 0 && movies[0].find((movie) => movie.id == parms.id);
    setSelectedMovie(movie);
  }, [movies, parms.id]);

  return (
    selectedMovie ? (
      <div style={{color: 'black'}}>
        <RecipeReviewCard
          key={selectedMovie.id}
          id={selectedMovie.id}
          title={selectedMovie.original_title}
          overview={selectedMovie.overview}
          rating={selectedMovie.vote_average}
          image={'https://image.tmdb.org/t/p/w500/' + selectedMovie.poster_path}
          button={true}
        />
      </div>
    ) : null
  )
}