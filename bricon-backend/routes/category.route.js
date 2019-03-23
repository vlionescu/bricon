const express = require('express');

const categoryHandler = require('../handlers/category.handler');

const router = express.Router();

router.get('/', categoryHandler.getCategories);

router.post('/', categoryHandler.addCategory);

router.delete('/:id', categoryHandler.deleteCategory);

module.exports = router;
