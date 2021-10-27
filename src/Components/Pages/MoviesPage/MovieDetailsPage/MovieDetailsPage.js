import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../../../services/fetchMovies';
import {
  Link,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Review from '../Review/Review';
export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const { url } = useRouteMatch();
  useEffect(() => {
    api.fetchMovieById(filmId).then(setFilm);
  }, []);
  return (
    <>
      <h1>{filmId}</h1>
      {film && (
        <>
          <h1>{film.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          />
        </>
      )}
      <hr />
      <Link to={`${url}/cast`}>Cast</Link>
      <br />
      <Link to={`${url}/review`}>Review</Link>
      <Route path="/movies/:filmId/cast">
        <Cast filmId={filmId} />
      </Route>
      <Route path="/movies/:filmId/review">
        <Review filmId={filmId} />
      </Route>
    </>
  );
}
