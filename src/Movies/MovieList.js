import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function MovieList(props) {
  const navigate = useNavigate()

  const handler = id => () => {navigate(`movies/${id}`)}
  

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} handler={handler(movie.id)}  />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {handler} = props

  return (
    <div className="movie-card" onClick={handler} >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
