const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0-xghod.mongodb.net/week09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    userUnifiedTopology:true,
});

// GET. POST. PUT. DELETE

// re.query = access query params (filters)
// req.params = access route params (edit and delete)
// req.body = access body of requests (create and edit)
app.use(express.json());
app.use(routes);


app.listen(8448);