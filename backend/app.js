/* jshint node: true */
/*jshint esversion: 6 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(2000, () => {
    console.log('Server running on port 2000');
});

// routes(accounts);
// routes(activities);
// routes(shopProducts);
// routes(dashboard);
// routes(admin);
//
// function routes(routes){
//     routes.forEach(function(route){
//         app[route.method](route.url, route.callback);
//     });
// }
//
module.exports = app;
