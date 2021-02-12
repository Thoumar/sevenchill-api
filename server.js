const http = require('http');
const express = require('express');
// const socketio = require('socket.io');

// Database
require('./database/connect.js');

// App
const app = express();
const server = http.createServer(app);
// const io = socketio(server);

// Chat
// require('./routes/chat')(io);

// Middlewares
require('./middlewares/logger.js')(app);
require('./middlewares/parser.js')(app);
require('./middlewares/cors.js')(app);

// Static
app.use('/public', express.static(`${__dirname}/public`));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/events', require('./routes/events'));
// app.use('/rooms', require('./routes/rooms'));
app.use('/uploads', require('./routes/uploads'));

app.use(express.static(`${__dirname}/public`));

module.exports = server;