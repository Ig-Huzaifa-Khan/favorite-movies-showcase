import React from 'react';
import './App.css'; 

// Import the components we will create
import Header from './components/Header';
import Introduction from './components/Introduction';
import MovieList from './components/MovieList';
import Preferences from './components/Preferences';

// --- Placeholder Data (REPLACE THIS) ---
const myMovies = [
  {
    title: "Interstellar",
    genre: "Sci-Fi / Adventure",
    love: "A breathtaking exploration of time, space, and human connection. Nolan's masterpiece combines cutting-edge science with emotional depth, featuring stunning visuals and Hans Zimmer's unforgettable score.",
    image: "/interstellar.jpg",
  },
  {
    title: "Barry Lyndon",
    genre: "Historical Drama",
    love: "Kubrick's visually stunning masterpiece shot entirely with natural light. Every frame looks like a classical painting, telling an epic tale of ambition, love, and tragedy in 18th century Europe.",
    image: "/barry-lyndon.jpg",
  },
  {
    title: "Spirited Away",
    genre: "Animation / Fantasy",
    love: "Miyazaki's enchanting masterpiece that transcends animation. A magical journey through a spirit world filled with wonder, imagination, and profound themes about identity, greed, and growing up.",
    image: "/spirited-away.jpg",
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi / Action",
    love: "A revolutionary film that redefined action cinema and sparked philosophical debates. Groundbreaking visual effects, thought-provoking concepts about reality, and iconic action sequences that still hold up today.",
    image: "/the-matrix.jpg",
  },
];

const moviePreferences = {
  favoriteGenres: ["Neo-Noir", "Period Dramas","Animation", "High-Concept Sci-Fi"],
  favoriteDirector: "Christopher Nolan",
  watchingFrequency: "Weekly binge-watcher, usually Saturday nights.",
};
// ----------------------------------------


function App() {
  return (
    <div className="movie-showcase">
      <Header />
      <main>
        <Introduction />
        <MovieList movies={myMovies} />
        <Preferences preferences={moviePreferences} />
      </main>
    </div>
  );
}

export default App;