"use strict";
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

///////////////////////
// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('short'));


///////////////////////
// ROUTES
const routes = require('./routes/routes.js')(app, fs);


///////////////////////
// SERVER START
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});