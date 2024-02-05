import React from 'react';
import Movie from './Movie';
import './MovieList.css';


function MovieList({ movies }) {
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
