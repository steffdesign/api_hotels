const express = require('express');
const router = express.Router();

const { getHotels, getSearchHotel, getSearchByName } = require('../controllers/hotels');

router.route('/')
    .get(getHotels)

    
router.route('/:stars')
    .get(getSearchHotel)

router.route('/search/:keyword')
    .get(getSearchByName);


module.exports = router;