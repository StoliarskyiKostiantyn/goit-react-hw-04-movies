import { useParams } from 'react-router';
export default function Review() {
  const { filmId } = useParams();
  return (
    <>
      <h1>Review</h1>
      <h1>{filmId}</h1>
    </>
  );
}
