import Slider from "./Slider";
import axios from 'axios';
import { useEffect, useState } from "react";
export default function Sliderpage() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [movies, setMovies] = useState([]);
        useEffect(() => {
            const fetchMovies = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
            const results = response.data.results;
            setMovies({ movies: results });}
            fetchMovies();
        }, []);

        const handleNext = () => {
            setCurrentIndex(currentIndex + 1);
        }

        const handlePrevious = () => {
            setCurrentIndex(currentIndex - 1);
        }
  return (
    <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"20px", padding:"20px"}}>
        <button onClick={handlePrevious}>Previous</button>
            <Slider currentIndex={currentIndex} images={movies}/>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}
