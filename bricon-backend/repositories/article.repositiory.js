const Article = require('../models/article.model');

const getArticles = async () => {
    return await Article.find();
};

const addArticle = async articleData => {
    const article = new Article(articleData);

    return await article.save();
};

const deleteArticle = async id => {
    return await Article.deleteOne({ id });
};

module.exports = {
    getArticles,
    addArticle,
    deleteArticle,
};
