const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const RECENT_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  RECENT_BASE_URL,
};
