const Products = require('../models/product.model');

const getProducts = async () => {
    return await Products.find({ quantity: { $gt: 0 } });
};

const getProduct = async (id) => {
    return await Products.findOne({id});
};

const searchProducts = async (ids) => {
    console.log(ids, 'ids')
    return await Products.find({  id: { $in: ids } });
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
    getProduct,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
