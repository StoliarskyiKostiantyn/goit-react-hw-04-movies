import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
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
  const history = useHistory();
  useEffect(() => {
    api.fetchMovieById(filmId).then(setFilm);
  }, []);
  const handleGoHome = () => {
    history.push('/');
  };
  return (
    <>
      <button onClick={handleGoHome}>Go home</button>
      {film && (
        <>
          <h1>{film.title}</h1>
          <img
            width="200"
            alt="Poster"
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          />
          <p>{film.overview}</p>
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
