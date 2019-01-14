import express from 'express';
import { json } from 'body-parser';
import morgan from 'morgan';
import registerRoutes from './routes';
import config from './config.js';

const app = express();


const port = process.env.EXPRESS_PORT || 8080;

app.use(json());

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use('/', (express.static(`${__dirname}/public`)));
app.use('/pc-se(/film)?', express.static(`${__dirname}/public`));
app.use('/pc-se/film/:movieId', express.static(`${__dirname}/public`));

registerRoutes(app, { config });


app.listen(port);
