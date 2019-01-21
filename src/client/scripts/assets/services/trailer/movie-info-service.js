import axios from 'axios';

const url = 'https://content.viaplay.se/pc-se/film';

export default function movieInfoService(movieId) {
    return axios.get(`/trailer-proxy/trailers?url=${url}/${movieId}`).then((res) => {
        return res.data;
    });
}

