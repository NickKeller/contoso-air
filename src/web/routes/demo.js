const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.write("Hello World!").end();
});


module.exports = router;
