const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const RegisterHandler = asyncHandler(async (req,res)=>{
    const {name , email, password} = req.body;

    res.status(200).json({
        name ,
        email,
        password,
    });
})

module.exports = {
    RegisterHandler,
}