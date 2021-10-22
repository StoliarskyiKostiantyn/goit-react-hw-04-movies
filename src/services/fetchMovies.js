const API_KEY = '47608d5961c2a225a6bc2492b5fa7a6d';
async function fetchMovie() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Нет покемона с именем`));
}
async function fetchMovieByName(movieName) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${movieName}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Нет такого фильма`));
}
async function fetchMovieById(filmId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Нет такого фильма`));
}
const api = {
  fetchMovie,
  fetchMovieByName,
  fetchMovieById,
};

export default api;
