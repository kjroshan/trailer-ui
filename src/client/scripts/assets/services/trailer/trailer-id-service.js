import axios from 'axios';

const url = 'https://content.viaplay.se/pc-se/film';

export default function trailerIdService(movieId) {
    return axios.get(`/trailer-proxy/trailer-links?url=${url}/${movieId}`).then((res) => {
        return res.data.videoId;
    });
}

