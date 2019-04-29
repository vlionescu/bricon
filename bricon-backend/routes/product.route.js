const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

const productHandler = require('../handlers/product.handler');

const { cloudinaryConfig } = require('../config/index');
cloudinary.config(cloudinaryConfig);

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'assets',
    allowedFormats: ['jpg', 'png'],
    transformation: [{width: 500, height: 500, crop: 'limit'}]
});

const parser = multer({storage: storage});

const router = express.Router();

router.get('/', productHandler.getProducts);

router.get('/:id', productHandler.getProduct);

router.post('/search', productHandler.searchProducts);

router.post('/purchase', productHandler.purchaseProducts);

router.post('/', parser.array('images'), productHandler.addProduct);

router.patch('/:id', productHandler.updateProduct);

router.delete('/:id', productHandler.deleteProduct);

module.exports = router;
