const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
    
 const MongoUrl = process.env.MONG_URL;


if (!MongoUrl) {
  console.error('❌ MONG_URL is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(MongoUrl)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((e) => {
    console.error('❌ MongoDB connection error:', e);
  });

     
