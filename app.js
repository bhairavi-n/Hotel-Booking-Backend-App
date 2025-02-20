const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const hotelRoutes = require('./routes/hotelRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authenticateJWT = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(authenticateJWT);

app.use('/hotels', hotelRoutes);
app.use('/bookings', bookingRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: 'Something broke!' });
});

module.exports = app;
