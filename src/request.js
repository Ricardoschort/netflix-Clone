

const API_KEY = "d642ee49b1cf9d30ad8ca60ad781e135"

const requests = {
  fetchTredding :`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  fetchNeflixOriginals : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchToRaded : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchToComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

};

export default requests