import Axios from 'axios';

function trailerIdController(params, req, res) {
    const { API_SERVER_ADRRESS, VIDEO_SERVICE_URL } = params.config;

    const axios = Axios.create({
        baseURL: API_SERVER_ADRRESS
    });
    console.log('API_SERVER_ADRRESS', API_SERVER_ADRRESS);
    const { movieId } = req.params;

    return axios.get(`/trailer-links?url=${VIDEO_SERVICE_URL}${movieId}`)
        .then((response) => {
            return res.status(200).send({
                videoId: response.data.trailer
            });
        })
        .catch(() => {
            return res.status(404).send('Video ID not found!');
        });
}

export default function create(params) {
    return trailerIdController.bind(null, params);
}
