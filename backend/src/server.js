const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://omnistack9:omnistack9@cluster0-shard-00-00-vinfw.mongodb.net:27017,cluster0-shard-00-01-vinfw.mongodb.net:27017,cluster0-shard-00-02-vinfw.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET. POST. PUT. DELETE

// re.query = access query params (filters)
// req.params = access route params (edit and delete)
// req.body = access body of requests (create and edit)
app.use(express.json());
app.use(routes);


app.listen(8448);