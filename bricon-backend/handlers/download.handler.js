const downloadRepository = require('../repositories/download.repository');

const getDownloads = async (req, res) => {
    try {
        const downloads = await downloadRepository.getDownloads(req.body);

        res.json({
            success: true,
            payload: {downloads},
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const addDownload = async (req, res) => {
    try {
        const download = await downloadRepository.addDownload(req.body);

        res.status(201).json({
            success: true,
            payload: {
                id: download.id,
            },
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const deleteDownload = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await downloadRepository.deleteDownload(id);
        if(deleted.deletedCount) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false });
        }
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getDownloads,
    addDownload,
    deleteDownload,
};
