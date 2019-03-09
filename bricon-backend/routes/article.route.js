const articleHandler = require('../handlers/article.handler');

module.exports = [
    {
        method: 'get',
        url: '/articles',
        callback: articleHandler.getArticles,
    },
    {
        method: 'post',
        url: '/articles',
        callback: articleHandler.addArticle,
    },
    {
        method: 'delete',
        url: '/articles/:id',
        callback: articleHandler.deleteArticle,
    },
];

