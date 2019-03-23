const categoryRepository = require('../repositories/category.repository');

const getCategories = async (req, res) => {
    try {
        const categories = await categoryRepository.getCategories(req.body);

        res.json({
            success: true,
            payload: {categories},
        });
    } catch(err) {
        res.status(400).send(err);
    }
};

const addCategory = async (req, res) => {
    try {
        const category = await categoryRepository.addCategory(req.body);

        res.status(201).json({
            success: true,
            payload: {
                id: category.id,
            },
        });
    } catch(err) {
        res.status(400).send(err);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deleted = await categoryRepository.deleteCategory(req.body);

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
    getCategories,
    addCategory,
    deleteCategory
};
