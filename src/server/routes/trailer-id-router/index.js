import trailerIdController from './controller';

export default function provideRouterDetails(params) {
    return {
        routePath: '/:movieId',
        controller: trailerIdController(params)
    };
}
