import { useState, useEffect } from 'react';
import api from '../../../services/fetchMovies';
import { Link, useRouteMatch } from 'react-router-dom';

export default function HomePage() {
  const [filmList, setFilmList] = useState([]);
  const { url } = useRouteMatch();
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
            return (
              <li key={item.id}>
                <Link to={`${url}/${item.id}`}>
                  {item.name}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
