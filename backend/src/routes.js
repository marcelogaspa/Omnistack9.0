const express = require('express');
const SessionControler = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

routes.post('/sessions', SessionControler.store);

routes.post('/spots', SpotController.store);


module.exports = routes;
