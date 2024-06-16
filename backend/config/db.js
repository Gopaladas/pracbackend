const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const connectDB = asyncHandler(async (req,res)=>{
    try {
       const conn= await mongoose.connect(process.env.MONGO_URI);
       console.log(`MongoDB is Connected : ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})

module.exports = connectDB;