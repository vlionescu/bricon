const downloadHandler = require('../handlers/download.handler');

module.exports = [
    {
        method: 'get',
        url: '/downloads',
        callback: downloadHandler.getDownloads,
    },
    {
        method: 'post',
        url: '/downloads',
        callback: downloadHandler.addDownload,
    },
    {
        method: 'delete',
        url: '/downloads/:id',
        callback: downloadHandler.deleteDownload,
    },
];

