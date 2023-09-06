const express = require("express"); // Imports the Express library
require("dotenv").config();

const app = express(); // Initializes an Express application
const port = 3000; //Defines the port where API will run
const mongoose = require("mongoose"); // Use Mongoose

const rateLimit = require("express-rate-limit");
const cors = require("cors");

const uri = process.env.MONGODB_URI; // || "mongodb://127.0.0.1:27017/myDatabase"; //This is my MongoDB connection string

// Import model and routes
const RemoteWorkResource = require("./models/RemoteWorkResource");
const remoteWorkRoutes = require("./routes/remoteWorkRoutes");

// Middleware to parse JSON data
app.use(express.json());

//Enable CORS
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Apply rate limiter to all requests
app.use(limiter);

// Initialize routes
app.use("/api/remoteWorkResource", remoteWorkRoutes);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Starts the server on the defined port
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

//Defines a simple route that responds with 'Hello World!' when someone visits the root URL "/"
app.get("/", (req, res) => {
  res.send("Hello world");
});
