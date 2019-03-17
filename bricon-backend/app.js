const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const articleRoutes  = require('./routes/article.route');
const downloadRoutes = require('./routes/download.route');

mongoose.connect('mongodb://localhost:27017/bricon');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(2000, () => {
    console.log('Server running on port 2000');
});

const makeRoutes = routes => {
    routes.forEach(route => app[route.method](route.url, route.callback));
};

makeRoutes(articleRoutes);
makeRoutes(downloadRoutes);

module.exports = app;
