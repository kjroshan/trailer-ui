import Axios from 'axios';

function trailerProxyController(params, req, res) {
    const { API_SERVER_ADRRESS, VIDEO_SERVICE_URL } = params.config;

    const axios = Axios.create({
        baseURL: API_SERVER_ADRRESS
    });
    console.log('API_SERVER_ADRRESS', API_SERVER_ADRRESS);
    console.log('Path: ', req.path);
    console.log('Path: ', req.query);

    // const { movieId } = req.params;

    return axios.get(req.path, { params: req.query })
        .then((response) => {
            return res.status(200).send(response.data);
        })
        .catch(() => {
            return res.status(404).send('Video ID not found!');
        });
}

export default function create(params) {
    return trailerProxyController.bind(null, params);
}
