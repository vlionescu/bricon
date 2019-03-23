const Products = require('../models/product.model');

const getProducts = async () => {
    return await Products.find();
};

const addProduct = async productData => {
    const product = new Products(productData);

    return await product.save();
};

const updateProduct = async productData => {
    return await Products.findOneAndUpdate({id: productData.id}, productData, {upsert:true}, err => {
        // if (err) return res.send(500, { error: err });
        // return res.send("succesfully saved");
    });
};

const deleteProduct = async id => {
    return await Products.deleteOne({ id });
};

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
