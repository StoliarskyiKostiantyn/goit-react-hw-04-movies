import { useState, useEffect } from 'react';
import api from '../../../services/fetchMovies';

export default function HomePage() {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    console.log('effext');
    if (filmList !== []) {
      api
        .fetchMovie()
        .then(data => setFilmList(data.results));
      console.log(filmList);
    }
  }, []);

  return (
    <>
      <h1>HOMEPAGE</h1>
      <ul>
        {filmList.map(item => {
          if (item.name !== undefined) {
            return <li key={item.id}>{item.name}</li>;
          } else {
            return <li key={item.id}>{item.title}</li>;
          }
        })}
      </ul>
    </>
  );
}
