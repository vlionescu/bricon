const Category = require('../models/category.model');

const getCategories = async () => {
    return await Category.find();
};

const addCategory = async categoryData => {
    const category = new Category(categoryData);

    return await category.save();
};

const deleteCategory = async id => {
    return await Category.deleteOne({ id });
};

module.exports = {
    getCategories,
    addCategory,
    deleteCategory,
};
