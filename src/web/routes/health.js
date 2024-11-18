const express = require('express');

const router = express.Router();

router.get('/healthz', function(req, res, next) {
    res.writeHead(200)
});


module.exports = router;
