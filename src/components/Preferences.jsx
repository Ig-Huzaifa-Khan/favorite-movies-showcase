import React from 'react';

function Preferences({ preferences }) {
  return (
    <section id="preferences">
      <h2>Movie Preferences</h2>
      
      <h3>Favorite Genres:</h3>
      <ul>
        {preferences.favoriteGenres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      
      <h3>Favorite Director:</h3>
      <p>{preferences.favoriteDirector}</p>
      
      <h3>How Often I Watch:</h3>
      <p>{preferences.watchingFrequency}</p>
    </section>
  );
}

export default Preferences;