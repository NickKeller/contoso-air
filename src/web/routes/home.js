const express = require('express');

const navbarService = require('../services').NavbarService();
const dealsService = require('../services').DealsService();

const router = express.Router();

router.get('/', function(req, res, next) {
    const vm = {
        nav: navbarService.getData(req),
        deals: {
            destinations: dealsService.getBestDestinations(3),
            flights: dealsService.getFlightDeals(4)
        }
    };
    res.render('home', vm);
});

router.get('/demo', (req, res, next) => {
    res.write("Hello World!").end();
})

module.exports = router;
