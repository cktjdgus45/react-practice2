import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './app.css';
import Pagination from './pagination';
import PocketmonList from './pocketmonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
    return () => cancel();  //clean-up
  }, [currentPageUrl])


  if (loading) return "loading...";


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
