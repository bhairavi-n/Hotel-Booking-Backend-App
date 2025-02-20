class Booking {
    constructor(id, userId, hotelId, roomType, rooms, adults, kids, checkIn, checkOut, price) {
      this.id = id;
      this.userId = userId;
      this.hotelId = hotelId;
      this.roomType = roomType;
      this.rooms = rooms;
      this.adults = adults;
      this.kids = kids;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.price = price;
    }
  }
  
  module.exports = Booking;
  