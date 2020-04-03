import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', routes);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started on port: ' + port);

module.exports = app;
