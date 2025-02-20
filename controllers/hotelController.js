import { getHotels, getHotelById } from '../services/hotelServices.js';
import { errorMessages } from '../utils/constants.js';

export function getAllHotels(req, res) {
  try {
    const location = req.query.location;
    const hotels = getHotels();

    if (location) {
      const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());
      return res.status(200).json({ status: 'success', data: filteredHotels });
    }

    res.status(200).json({ status: 'success', data: hotels });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}

export function getHotel(req, res) {
  try {
    const hotel = getHotelById(parseInt(req.params.id));
    if (hotel) {
      res.status(200).json({ status: 'success', data: hotel });
    } else {
      res.status(404).json({ status: 'error', message: errorMessages.hotelNotFound });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
}
