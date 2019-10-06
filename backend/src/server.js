const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb://omnistack9:omnistack9@cluster0-shard-00-00-vinfw.mongodb.net:27017,cluster0-shard-00-01-vinfw.mongodb.net:27017,cluster0-shard-00-02-vinfw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {};

io.onconnection('connection' , socket => {
    socket.emit('message', );
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io=io;
    req.connectedUsers = connectedUsers;

    return next();
})
// GET. POST. PUT. DELETE

// re.query = access query params (filters)
// req.params = access route params (edit and delete)
// req.body = access body of requests (create and edit)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(8448);