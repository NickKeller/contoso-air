const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
    res.writeHead(200).end();
});


module.exports = router;
