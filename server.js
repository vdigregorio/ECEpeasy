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
const cookieParser = require('cookie-parser');

const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

// socket.io //smna15(sam) helped with socket.io
const http       = require('http').Server(app);
const io         = require('socket.io')(http);

io.on('connection', socket => {
  console.log('a user connected');
  // receive msg from client through socket 'server-chat'
  socket.on('server-chat', msg => {
    console.log('chat: ' + msg);
    // broadcast msg received to all who are listening to socket 'chatroom'
    socket.broadcast.emit('chatroom', {msg : msg});
  });

  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(PORT, () => console.log('listening on', PORT));


app.use(logger('dev'));

app.use(bodyParser.json());


const userRouter = require('./routes/user.js');
// const apiRouter = require('./routes/ap.js');
app.use('/user', userRouter);
app.use('/api/opps', require('./routes/opps'));

// app.use('/campaign', require('./routes/volunteer.js'));

const history = require('connect-history-api-fallback');
app.use(history());
// using history api fallback library to access url paths directly

// app.use('/api', apiRouter);
app.use(cookieParser('valewale'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/favicon.ico', '/user/login', '/user/signup','/api/opps']}));

// app.listen(PORT, () => console.log('server is up and running on port', PORT));
