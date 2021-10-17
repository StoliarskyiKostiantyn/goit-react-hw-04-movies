async function fetchMovie() {
  const API_KEY = '47608d5961c2a225a6bc2492b5fa7a6d';
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Нет покемона с именем`));
}

const api = {
  fetchMovie,
};

export default api;
