import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=6648f19b8f09e1fc8d551f5926a5fcb3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;