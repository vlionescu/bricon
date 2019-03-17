const Download = require('../models/download.model');

const getDownloads = async () => {
    return await Download.find();
};

const addDownload = async downloadData => {
    const download = new Download(downloadData);

    return await download.save();
};

const deleteDownload = async id => {
    return await Download.deleteOne({ id });
};

module.exports = {
    getDownloads,
    addDownload,
    deleteDownload,
};
