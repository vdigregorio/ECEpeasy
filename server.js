'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const bcrypt      = require('bcryptjs');

const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());


const userRouter = require('./routes/user.js');
// const apiRouter = require('./routes/ap.js');
app.use('/user', userRouter);

// app.use('/campaign', require('./routes/volunteer.js'));
app.use('/api/opps', require('./routes/opps'));

const history = require('connect-history-api-fallback');
app.use(history());
// using history api fallback library to access url paths directly

// app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/favicon.ico', '/user/login', '/user/signup', '/dashboard', '/profile']}));

app.listen(PORT, () => console.log('server is up and running on port', PORT));
