import { createBooking, getBookings, updateBooking, deleteBooking } from '../services/bookingServices.js';
import { errorMessages, responseMessage } from '../utils/constants.js';

export function bookRoom(req, res) {
  try {
    const newBooking = createBooking(req.body);
    res.status(201).json({ status: 'success', data: newBooking });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}

export function getAllBookings(req, res) {
  try {
    const userId = req.user.id; // Assuming the user ID is retrieved from the JWT token
    const bookings = getBookings().filter(booking => booking.userId === userId);
    res.status(200).json({ status: 'success', data: bookings });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}

export function updateBookingDetails(req, res) {
  try {
    const updatedBooking = updateBooking(parseInt(req.params.id), req.body);
    if (updatedBooking) {
      res.status(200).json({ status: 'success', data: updatedBooking });
    } else {
      res.status(404).json({ status: 'error', message: errorMessages.bookingNotFound });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}

export function cancelBooking(req, res) {
  try {
    const bookingDeleted = deleteBooking(parseInt(req.params.id));
    if (bookingDeleted) {
      res.status(204).json({ status: 'success', message: responseMessage.bookingCancelled });
    } else {
      res.status(404).json({ status: 'error', message: errorMessages.bookingNotFound });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}
