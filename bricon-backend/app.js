const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const articleRoutes  = require('./routes/article.route');
const categoryRoutes = require('./routes/category.route');
const downloadRoutes = require('./routes/download.route');
const productRoutes  = require('./routes/product.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require( './config/mongoose' )( app );

app.use('/articles', articleRoutes);
app.use('/categories', categoryRoutes);
app.use('/downloads', downloadRoutes);
app.use('/products', productRoutes);

app.listen(2000, () => {
    console.log('Server running on port 2000');
});

module.exports = app;
