import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';
import mongoose from 'mongoose';
import domainRoutes from './domain/domain-routes';


 
mongoose.connect('mongodb://localhost:27017/micromapper', {useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/domains', domainRoutes);
//app.use('/', routes);
app.use(clientErrorHandler); //should be called AFTER all REST API routes

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started on port: ' + port);

module.exports = app;



function clientErrorHandler(err, req, res, next) {
    
    if (err.name === 'CastError' && err.path === '_id') {
        res.status(400).send({ error: 'Invalid id format' });
    } else if (err.name === 'MongoError' && err.code === 11000) {
        console.log(err);
        res.status(400).send({ error: 'This value already exists' });
    } else if (req.xhr) {
        res.status(500).send({ error: 'Something failed' });
    } else {
        next(err);
    }
}
