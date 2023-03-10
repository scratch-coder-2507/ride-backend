require("dotenv").config();
const mongoose = require("mongoose");

const local = process.env.LOCAL_DB; // use this when you need local mongodb database
const cloud =
  process.env.CLOUD_DB ||
  "mongodb+srv://admin:EZ4nBUSTTC6Zmrrd@cluster0.9n3ns.mongodb.net/rummyDatabase?retryWrites=true&w=majority"; // use this for cloud mongodb database connection

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(cloud, options);
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
