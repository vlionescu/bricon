const Products     = require('../models/product.model');

const emailService = require('../services/email.service');

const getProducts = async () => {
    return await Products.find({ quantity: { $gt: 0 } });
};

const getProduct = async (id) => {
    return await Products.findOne({ id });
};

const searchProducts = async (ids) => {
    return await Products.find({  id: { $in: ids } });
};

const purchaseProducts = async (data) => {
    // const { products, total } = data;
    // const ids = products.map(({ id }) => id);
    // for(let id of ids) {
    //     const product = await Products.find({ id }) ;
    //     if(!product) {
    //         return product;
    //     }
    // }
    const mailOptions = {
        to: 'frontend.vlad.ionescu@gmail.com',
        subject: 'test email',
        html: '<h1 style="color: red"> test title </h1>'
    };

    return await emailService.sendEmail(mailOptions);
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
    purchaseProducts,
    addProduct,
    updateProduct,
    deleteProduct,
};
