const productRepository = require('../repositories/product.repository');

const getProducts = async (req, res) => {
    try {
        const products = await productRepository.getProducts(req.body);

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
        const deleted = await productRepository.deleteProduct(req.body);

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
    addProduct,
    updateProduct,
    deleteProduct,
};
