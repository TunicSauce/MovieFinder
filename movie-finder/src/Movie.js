import './Movie.css';
function Movie({ movie }) {
    return (
      <div className="movie">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <p className="movie-year">{movie.Year}</p>
          {/* Additional movie details */}
          <p className="movie-plot">{movie.Plot}</p> {}
          <p className="movie-director">Directed by: {movie.Director}</p> {}
          <p className="movie-rating">Rating: {movie.imdbRating}</p> {}
        </div>
      </div>
    );
  }
  
  export default Movie;
  