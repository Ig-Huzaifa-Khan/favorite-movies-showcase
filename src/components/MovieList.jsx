import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <section id="movie-list">
      <h2>My Top 4 Movies</h2>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;