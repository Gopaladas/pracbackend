const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req,res,next)=>{
    let token

    if(req.headers.authorization && (req.headers.authorization.startsWith('Bearer'))){
        try {
            token = req.headers.authorization.split(' ')[1];

            // console.log(token);
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            // console.log(decoded.id);
            req.user = await User?.findById(decoded.id)?.select('-password');
            // console.log(req.user);
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Unauthorized");
        }
        //666f29b6740b540da1920de7
    }

    if(!token){
        res.status(401)
        throw new Error("Unauthorized");
    }
})

module.exports = {
    protect,
}