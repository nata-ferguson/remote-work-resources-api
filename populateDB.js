require("dotenv").config();
const mongoose = require("mongoose");
const RemoteWorkResource = require("./models/RemoteWorkResource");

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    const resources = [
      {
        name: "Website 1",
        url: "http://website1.com",
        category: "Job Board",
        description: "Description 1",
      },
      {
        name: "Website 2",
        url: "http://website2.com",
        category: "Freelance",
        description: "Description 2",
      },
      {
        name: "Website 3",
        url: "http://website3.com",
        category: "Job Board",
        description: "Description 3",
      },
      // ... more data
    ];

    RemoteWorkResource.insertMany(resources)
      .then(() => {
        console.log("Data inserted");
        mongoose.connection.close();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
