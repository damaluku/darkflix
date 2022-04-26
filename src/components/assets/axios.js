import axios from "axios";

 // https://api.themoviedb.org/3/movie/550?api_key=43f5548652743d95d2408ca3ab2f2c9c


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;