const config = require('./index');
const mongoose = require('mongoose');

module.exports = app => {
    mongoose.connect(config.mongoUrl,  {
        useCreateIndex: true,
        useNewUrlParser: true,
    });

    mongoose.Promise = global.Promise;

    if (app) {
        app.set('mongoose', mongoose);
    }
};
