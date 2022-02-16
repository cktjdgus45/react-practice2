import React, { useEffect, useState } from 'react';
import './app.css';
import Pagination from './pagination';
import PocketmonList from './pocketmonList';

function App() {
  const [pokemon, setPokemon] = useState();
  return (
    <>
      {
        pokemon.map(p => (
          <div key={p}>{p}</div>
        ))
      }
    </>
  );
}
export default App;
