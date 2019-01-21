const _env = process.env;
const TRAILER_API_HOST = _env.TRAILER_API_HOST || 'http://localhost';
const TRAILER_API_PORT = _env.TRAILER_API_PORT || '3000';

export default {
    movieList: {
        url: 'https://content.viaplay.se/pc-se/film'
    },
    API_SERVER_ADRRESS: `${TRAILER_API_HOST}:${TRAILER_API_PORT}`,
    VIDEO_SERVICE_URL: 'https://content.viaplay.se/pc-se/film/'
};
