const _env = process.env;
const TRAILER_API_HOST = _env.TRAILER_API_HOST || 'localhost';

export default {
    movieList: {
        url: 'https://content.viaplay.se/pc-se/film'
    },
    API_SERVER_ADRRESS: `http://${TRAILER_API_HOST}:3000`,
    VIDEO_SERVICE_URL: 'https://content.viaplay.se/pc-se/film/'
};
