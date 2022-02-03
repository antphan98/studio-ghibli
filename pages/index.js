import Head from 'next/head'
import { useState, useEffect } from 'react';
const _ = require("lodash");

export default function Home() {
  const [ movies, setMovies ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [])

  if (isLoading) return <h1>Loading...</h1>
  if (!movies) return <h1>No movies found</h1>

  const orderedMovies = _.orderBy(movies, ['title'], ['asc']);

  console.log(orderedMovies);

  return (
    <div>
      <Head>
      </Head>

      {orderedMovies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={movie.image} width="100" />
          <h2>{movie.title}</h2>
        </div>
      ))}

    </div>
  )
}
