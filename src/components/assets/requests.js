const API_KEY = '43f5548652743d95d2408ca3ab2f2c9c'
 // https://api.themoviedb.org/3/movie/550?api_key=43f5548652743d95d2408ca3ab2f2c9c

 const requests = {
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_newtworks=213`,
     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
 }

 export default requests