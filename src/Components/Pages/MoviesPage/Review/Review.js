import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import api from '../../../../services/fetchMovies';
export default function Review() {
  const { filmId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    api
      .fetchReview(filmId)
      .then(data => setReview(data.results));
  }, []);
  console.log(review);
  if (review.length === 0) {
    return <p>There no reviews</p>;
  } else {
    return (
      <ul>
        {review.map(rev => {
          return (
            <li key={rev.id}>
              <h4>{rev.author}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w500${rev.author_details.avatar_path}`}
              />
              <p>{rev.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
