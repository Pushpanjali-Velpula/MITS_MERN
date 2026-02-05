const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('💥MongoDB Connected successfully💥🌟');
  }catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }

}
module.exports = connectDB;