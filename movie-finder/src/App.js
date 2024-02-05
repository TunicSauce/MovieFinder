import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import MovieList from './MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchValue, year) => {
    setLoading(true);
    setError(null);

    try {
      let apiUrl = `https://www.omdbapi.com/?apikey=55f4a16f&s=${searchValue}`;
      if (year) {
        apiUrl += `&y=${year}`;
      }
      

      const response = await axios.get(apiUrl);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchValue, year) => {
    fetchMovies(searchValue, year);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Finder</h1>
        <p>Discover movies across decades and genres</p>
      </header>
      <Search handleSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
      <footer className="App-footer">
        <p>© 2024 Movie Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
