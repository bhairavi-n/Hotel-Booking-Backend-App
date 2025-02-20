# Hotel Booking API

## Project Overview
The **Hotel Booking API** is a Node.js-based backend application built using **Express.js**. It allows users to search for hotels, book rooms, modify bookings, and cancel reservations. The application follows a **structured N-tier architecture**, making it scalable and maintainable.

## Tech Stack
- **Backend:** Node.js (Express.js)
- **Database:** JSON-based storage (for lightweight implementation)
- **Middleware:** Custom authentication and validation layers
- **Environment:** Configurable via `config.js`

## Features
- List all hotels with filtering options (e.g., by location)
- Book rooms in hotels by selecting **room type, check-in & check-out dates, number of rooms**
- Display user bookings
- Modify existing bookings (update check-in/check-out dates)
- Cancel bookings
- Proper **error handling and validations**

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v20+ recommended)
- npm or yarn package manager

### Steps to Run Locally
1. Clone the repository:
   ```
    git clone https://github.com/bhairavi-n/Hotel-Booking-Backend-App.git
    cd hotel-booking-api
   ```

2. Install dependencies:
   ```
    npm install
   ```

3. Start the server:
   ```
    npm start
   ```
   The server will run on `http://localhost:3000/` by default.

## Folder Structure
├── config
│   ├── config.js            # Configuration settings
├── controllers
│   ├── bookingController.js # Handles booking logic
│   ├── hotelController.js   # Handles hotel-related requests
├── middleware
│   ├── authMiddleware.js    # Authentication middleware
├── models
│   ├── booking.js           # Booking model (schema structure)
│   ├── hotel.js             # Hotel model (schema structure)
├── routes
│   ├── bookingRoutes.js     # Booking API routes
│   ├── hotelRoutes.js       # Hotel API routes
├── services
│   ├── bookingServices.js   # Business logic for bookings
│   ├── hotelServices.js     # Business logic for hotels
├── utils
│   ├── constants.js         # Constant values (e.g., room types, locations)
│   ├── db.js                # Database connection setup
├── app.js                   # Main Express app setup
├── server.js                # Entry point to start the server
├── package.json             # Dependencies and scripts
├── data
│   ├── bookings.json        # JSON store for bookings
│   ├── hotels.json          # JSON store for hotel data
│   ├── users.json           # JSON store for users


## API Endpoints

### 1. Hotels API
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/hotels`       | Get all hotels |
| GET    | `/hotels/:id`   | Get a specific hotel by ID |
| GET    | `/hotels?location=<location>` | Get hotels filtered by location |

### 2. Booking API
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | `/bookings`     | Create a new booking |
| GET    | `/bookings`     | Get all user bookings |
| PUT    | `/bookings/:id` | Modify an existing booking |
| DELETE | `/bookings/:id` | Cancel a booking |

## Key File Descriptions

- **`config/config.js`**: Contains environment configurations (e.g., port number, database connection).
- **`controllers/`**: Handles request logic and delegates work to services.
- **`services/`**: Implements business logic for hotels and bookings.
- **`routes/`**: Defines Express API endpoints.
- **`utils/constants.js`**: Stores reusable values (e.g., room types, locations).
- **`data/*.json`**: Mock JSON files acting as a lightweight database.

## Error Handling
The API ensures robust error handling using middleware. Common errors include:
- Invalid input data (e.g., missing required fields)
- Trying to book an already booked room
- Booking modifications conflicting with existing reservations

<!-- ## Running Tests
To run unit tests:
```sh
npm test
```
Tests are located inside the `tests/` directory and validate core functionalities. -->