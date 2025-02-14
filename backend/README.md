# Netflix Clone Backend README

# Netflix Clone Backend

## Overview

This is the backend for the Netflix clone application. It is built using Node.js, Express, and MongoDB. The backend handles all the API requests and manages the database interactions.

## Technologies Used

- Node.js
- Express
- Mongoose
- MongoDB
- dotenv

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root of the backend directory and add your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

## API Endpoints

- **GET /api/items**: Retrieve all items.
- **POST /api/items**: Create a new item.
- **GET /api/items/:id**: Retrieve a specific item by ID.
- **PUT /api/items/:id**: Update a specific item by ID.
- **DELETE /api/items/:id**: Delete a specific item by ID.

## Folder Structure

```
backend
├── src
│   ├── controllers      # Contains request handlers
│   ├── models           # Contains Mongoose models
│   ├── routes           # Contains route definitions
│   ├── app.js           # Main application file
│   └── config           # Configuration files
├── package.json         # Project dependencies and scripts
├── .env                 # Environment variables
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.