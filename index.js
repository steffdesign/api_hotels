const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require ('express');
const app = express();

app.use(cors());

const hotelsRoutes = require('./routes/hotels');

//settings
app.set('json spaces', 4);

// middlewares - son morgan y bodyparser
app.use(morgan('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

// routes - rutas principales
app.use('/hotels', hotelsRoutes);

// static files

// starr server

app.listen(4000, () => {
    console.log('server on port', 4000);
});