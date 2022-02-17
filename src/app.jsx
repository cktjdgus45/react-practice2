import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './app.css';
import Pagination from './pagination';
import PocketmonList from './pocketmonList';

function App() {
  const [pokemon, setPokemon] = useState([]);

  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(res => setPokemon(res.data.results.map(p => p.name)))

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
