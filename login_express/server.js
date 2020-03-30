const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const jwt = require('jsonwebtoken');
const router = require('./Routers/router');
const config = require('./Configurations/config');
const mongoose = require('./DataBase/connection');
const authRouter = require('./Routers/authRouter');

const app = express();

require('./passport')();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(express.static(__dirname + '/dist'));

app.use('/users',router);
app.use('/auth',authRouter);

// Catch all other routes and return the index file
/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  }); */

app.listen(config.port, ()=>{
    console.log("Log In Application running on ",config.port);
});