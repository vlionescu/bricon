const articleRepository = require('../repositories/article.repositiory');

const getArticles = async (req, res) => {
    try {
        const articles = await articleRepository.getArticles(req.body);

        res.json({
            success: true,
            payload: {articles},
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const addArticle = async (req, res) => {
    try {
        const article = await articleRepository.addArticle(req.body);

        res.json({
            success: true,
            payload: {
                id: article.id,
            },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const deleteArticle = async (req, res) => {
    try {
       await articleRepository.deleteArticle(req.body);

        res.json({
            success: true,
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getArticles,
    addArticle,
    deleteArticle
};
