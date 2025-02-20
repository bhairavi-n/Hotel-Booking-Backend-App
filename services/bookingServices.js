import { bookings, hotels } from '../utils/db.js';
import { errorMessages } from '../utils/constants.js';

export function createBooking(bookingData) {
  const hotel = hotels.find(hotel => hotel.id === bookingData.hotelId);
  if (!hotel) throw new Error(errorMessages.hotelNotFound);

  const room = hotel.rooms.find(room => room.type === bookingData.roomType);
  if (!room) throw new Error(errorMessages.roomTypeNotFound);

  if (room.count < bookingData.rooms) throw new Error(errorMessages.noEnoughRooms);

  const pricePerRoom = room.price;
  const totalPrice = pricePerRoom * bookingData.rooms;

  const newBooking = {
    ...bookingData,
    id: bookings.length + 1,
    price: totalPrice
  };
  bookings.push(newBooking);
  return newBooking;
}

export function getBookings() {
  return bookings;
}

export function updateBooking(id, bookingData) {
  const bookingIndex = bookings.findIndex(booking => booking.id === id);
  if (bookingIndex !== -1) {
    const hotel = hotels.find(hotel => hotel.id === bookingData.hotelId);
    if (!hotel) throw new Error(errorMessages.hotelNotFound);

    const room = hotel.rooms.find(room => room.type === bookingData.roomType);
    if (!room) throw new Error(errorMessages.roomTypeNotFound);

    if (room.count < bookingData.rooms) throw new Error(errorMessages.noEnoughRooms);

    const pricePerRoom = room.price;
    const totalPrice = pricePerRoom * bookingData.rooms;

    bookings[bookingIndex] = { ...bookings[bookingIndex], ...bookingData, price: totalPrice };
    return bookings[bookingIndex];
  }
  throw new Error(errorMessages.bookingNotFound);
}

export function deleteBooking(id) {
  const bookingIndex = bookings.findIndex(booking => booking.id === id);
  if (bookingIndex !== -1) {
    bookings.splice(bookingIndex, 1);
    return true;
  }
  throw new Error(errorMessages.bookingNotFound);
}
