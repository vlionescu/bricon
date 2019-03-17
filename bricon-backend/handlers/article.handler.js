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

        res.status(201).json({
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
       const deleted = await articleRepository.deleteArticle(req.body);

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
    getArticles,
    addArticle,
    deleteArticle
};
