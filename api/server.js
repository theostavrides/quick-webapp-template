require('dotenv').config();
const express = require('express');
const mountRoutes = require('./routes');
const Router = require('express-promise-router');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
mountRoutes(app);

http.listen(process.env.DEVPORT, () => console.log(`Example app listening at http://localhost:${process.env.DEVPORT}`));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});