import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovies(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);


  const addToSavedList = id => {
    setSaved(saved + ' ' + id)
    console.log(saved)
  };

  return (
    <div>
      <SavedList list= {[saved]}/>

      <Routes>
        <Route path='/' element={<MovieList movies={movies}/>} />
        <Route path='movies/:ID' element={<Movie addToSavedList={addToSavedList}/>} />
      </Routes>
    </div>
  );
}
