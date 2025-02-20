const express = require('express');
const { bookRoom, getAllBookings, updateBookingDetails, cancelBooking } = require('../controllers/bookingController.js');

const router = express.Router();

router.post('/', bookRoom);
router.get('/', getAllBookings);
router.put('/:id', updateBookingDetails);
router.delete('/:id', cancelBooking);

module.exports = router;
