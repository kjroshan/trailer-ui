import express from 'express';
import trailerIdRouter from './trailer-id-router';
import apiProxyRouter from './trailer-proxy';

export function createRoute({ routePath, controller }) {
    const router = express.Router();
    router.get(routePath, controller);
    return router;
}

export default function registerRoutes(app, params) {
    app.use('/trailer-id', createRoute(trailerIdRouter(params)));
    app.use('/trailer-proxy', createRoute(apiProxyRouter(params)));
}
