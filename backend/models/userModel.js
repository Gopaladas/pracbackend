const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type:String,
        required : [true,"Please enter the field"],
    },
    email : {
        type:String,
        required : [true,"Please enter the email field"],
        unique : true,
    },
    password : {
        type : String,
        required : [true,"Please enter the password field"],
    }
},{
    timestamps : true,
})


const User = mongoose.model('user',userSchema);

module.exports = User;