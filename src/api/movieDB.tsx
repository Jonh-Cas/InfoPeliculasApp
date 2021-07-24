import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3683c3bbdcb7a8b92a7e8d74f1376084',
        language: 'es-ES',
        // page: '1',
    }
    
});

export default movieDB;
