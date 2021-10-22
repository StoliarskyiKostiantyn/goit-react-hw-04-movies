import SearchForm from '../../SearchForm/SearchForm';
import { Link, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../../services/fetchMovies';
export default function MoviesPage() {
  const [filmName, setFilmName] = useState('');
  const [filmListByName, setFilmListByName] = useState([]);
  const { url } = useRouteMatch();
  useEffect(() => {
    if (filmName === '') {
      return;
    } else {
      console.log('effext');
      if (filmName !== '') {
        api
          .fetchMovieByName(filmName)
          .then(data => setFilmListByName(data.results));
        console.log(filmName);
      }
    }
  }, [filmName]);
  const handleSubmit = evt => {
    const inputValue = evt.target[0].value;
    evt.preventDefault();
    if (inputValue.trim() === '') {
      alert('Введите ключевое слово для поиска фильма');
      return;
    }
    setFilmName(inputValue);
    evt.target[0].value = '';
  };
  return (
    <>
      <h1>MoviesPage</h1>
      <SearchForm onSubmit={handleSubmit} />
      <ul>
        {filmListByName &&
          filmListByName.map(film => (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>
                {film.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
