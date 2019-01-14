import express from 'express';
import trailerIdRouter from './trailer-id-router';

export function createRoute({ routePath, controller }) {
    const router = express.Router();
    router.get(routePath, controller);
    return router;
}

export default function registerRoutes(app, params) {
    app.use('/trailer-id', createRoute(trailerIdRouter(params)));
}
