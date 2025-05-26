// import { useState } from 'react'
import { Component } from 'react'
import Movie from './movie'
import axios from 'axios'
import movie from './movie';

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
  }

componentDidMount = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
  const results = response.data.results;
  this.setState({ movies: results }, 
    () => {
    console.log(this.state.movies)
  });
}

  render() {
    return (
    <Movie movies={this.state.movies}/>    
  )
  }
}

// export default function movies() {
//     useState(
//         movies = [
//         {"id":"1",
//         "name":"The Shawshank Redemption",
//         "description":"The Shawshank Redemption description" 
//         },   
//         {"id":"2",
//         "name":"The Avengers",
//         "description":"The Avengers description"
//         },
//         {"id":"3",
//         "name":"The Godfather",
//         "description":"The Godfather description"
//         },
//         {"id":"4",
//         "name":"The Dark Knight",
//         "description":"The Dark Knight description"
//         },
//         {"id":"5",
//         "name":"12 Angry Men",
//         "description":"12 Angry Men description"
//         },
//         ]
// )

//   return (
//     <div>
//         <Movie movies={movies}/>
//     </div>
//   )
// }
