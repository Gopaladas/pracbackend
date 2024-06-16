const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

const RegisterHandler = asyncHandler(async (req,res)=>{
    const {name , email, password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please enter empty field");
    }
    const userExist = await User.findOne({email});

    if(userExist){
        res.status(400)
        throw new Error("User already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        name,email,password:hashpassword,
    })

    console.log("the data : ",user );

    if(user){
        res.status(201).json({
            _id:user.id,
            name :user.name ,
            email : user.email,
            password : user.password,
        });
    }else{
        res.status(400)
        throw new Error("Invalid User Id");
    }
})

const LoginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    console.log(email , password);
    if(!email || !password){
        res.status(400)
        throw new Error("Please enter the empty fields");
    }

    const userExist = User.findOne({email});
    console.log(userExist);
    if(userExist && (await bcrypt.compare(password,userExist.password))){
        res.json({
            _id : userExist.id,
            name : userExist.name,
        })
    }else{
        res.status(400)
        throw new Error("Invalid credentials");
    }
})


module.exports = {
    RegisterHandler,
    LoginUser,
}