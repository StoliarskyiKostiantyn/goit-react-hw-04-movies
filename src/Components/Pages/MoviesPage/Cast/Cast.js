import { useParams } from 'react-router';
export default function Cast() {
  const { filmId } = useParams();
  return (
    <>
      <h1>cast</h1>
      <h1>{filmId}</h1>
      <ul></ul>
    </>
  );
}
