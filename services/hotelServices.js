import { hotels } from '../utils/db.js';

export function getHotels() {
  return hotels;
}

export function getHotelById(id) {
  return hotels.find(hotel => hotel.id === id);
}
