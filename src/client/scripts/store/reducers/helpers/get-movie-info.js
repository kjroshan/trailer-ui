import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

export default function getMovieInfo(movieInfo) {
    let trailers = movieInfo.videos.results;
    trailers = filter(trailers, (video) => {
        return !isEmpty(video.key);
    });

    const youtubeVideoId = trailers.length > 0 ? trailers[0].key : null;

    return ({
        youtubeVideoId,
        trailers,
        movieInfo
    });
}
