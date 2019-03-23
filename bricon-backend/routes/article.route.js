const express = require('express');

const articleHandler = require('../handlers/article.handler');

const router = express.Router();

router.get('/', articleHandler.getArticles);

router.post('/', articleHandler.addArticle);

router.delete('/:id', articleHandler.deleteArticle);

module.exports = router;
