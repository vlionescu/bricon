const express = require('express');

const downloadHandler = require('../handlers/download.handler');

const router = express.Router();

router.get('/', downloadHandler.getDownloads);

router.post('/', downloadHandler.addDownload);

router.delete('/:id', downloadHandler.deleteDownload);

module.exports = router;
