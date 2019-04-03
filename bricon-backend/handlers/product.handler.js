const productRepository = require('../repositories/product.repository');

const getProducts = async (req, res) => {
    try {
        const products = await productRepository.getProducts();

        res.json({
            success: true,
            payload: { products },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productRepository.getProduct(id);

        res.json({
            success: true,
            payload: { product },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const searchProducts = async (req, res) => {
    try {
        const products = await productRepository.searchProducts(req.body);
        console.log(products.length, 'length')
        res.json({
            success: true,
            payload: { products },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const addProduct = async (req, res) => {
    try {
        req.body.images = [];

        req.files.forEach(({originalname, mimetype, url}) => {
            req.body.images.push({
                contentType: mimetype,
                url: url,
                name: originalname,
            })
        });

        const product = await productRepository.addProduct(req.body);

        res.status(201).json({
            success: true,
            payload: {
                id: product.id,
            },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};


const updateProduct = async (req, res) => {
    try {
        await productRepository.updateProduct(req.body);

        res.status(201).json({
            success: true,
            payload: {
                id: req.body.id,
            },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await productRepository.deleteProduct(id);

        if(deleted.deletedCount) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false })
        }
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getProducts,
    getProduct,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
