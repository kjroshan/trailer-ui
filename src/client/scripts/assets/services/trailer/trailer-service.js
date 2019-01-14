import axios from 'axios';

export default function trailerUrlService(movieId) {
    return axios.get(`/trailer-id/${movieId}`).then((res) => {
        return res.data.videoId;
    });
}

