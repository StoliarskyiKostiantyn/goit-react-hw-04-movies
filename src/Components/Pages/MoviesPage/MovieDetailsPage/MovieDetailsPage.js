import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../../../services/fetchMovies';
export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    api.fetchMovieById(filmId).then(setFilm);
  }, []);
  return (
    <>
      <h1>{filmId}</h1>
      {film && (
        <>
          <h1>{film.title}</h1>
          <img src={film.poster_path} />
        </>
      )}
    </>
  );
}
