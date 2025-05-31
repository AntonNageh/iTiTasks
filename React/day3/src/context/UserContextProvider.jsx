import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const movieContext = createContext(); 

export default function UserContextProvider({children}) {
  let [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");
      setMovies([response.data.results]);
    };
    fetchMovies();
  }, []);
  return (
    <movieContext.Provider value={{movies}}>
      {children}
    </movieContext.Provider>
  )
}