const express = require('express');

const config = require('./config');
const api = require('./src/api');
const { mongoManager } = require('./src/mongo');

const app = express();
mongoManager.connect();

// api routes v1
app.use('/api/v1', api(config));

module.exports = app;
