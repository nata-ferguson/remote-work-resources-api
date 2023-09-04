// Create a MongoDB Schema
const mongoose = require("mongoose");

const RemoteWorkResourceSchema = new mongoose.Schema({
  name: String,
  url: String,
  category: String,
  description: String,
});

module.exports = mongoose.model(
  "RemoteWorkResource",
  RemoteWorkResourceSchema,
  "remoteworkresources"
);
