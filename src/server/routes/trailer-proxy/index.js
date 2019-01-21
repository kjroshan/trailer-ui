import trailerProxyController from './controller';

export default function provideRouterDetails(params) {
    return {
        routePath: '*',
        controller: trailerProxyController(params)
    };
}
