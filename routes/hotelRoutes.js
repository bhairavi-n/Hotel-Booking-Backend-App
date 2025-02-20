const express = require('express');
const { getAllHotels, getHotel } = require('../controllers/hotelController.js');

const router = express.Router();

router.get('/', getAllHotels);
router.get('/:id', getHotel);

module.exports = router;
