const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : [true, "All Users must have a First Name"],
    },
    lastName:{
        type : String,
        required :  [true, "All Users must have a Last Name"],
    },
    email:{
        type : String,
        required :  [true, "All Users must enter an Email"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password:{
        type : String, 
        required : [true, "Dont forget to create your password."],
        minLength : [8, "Your password should be at least 8 charactors long"]
    },
    subscribe:{
        type : Boolean
    }
}, {timestamps:true})

const user = mongoose.model ("user", userSchema);

module.exports = user;