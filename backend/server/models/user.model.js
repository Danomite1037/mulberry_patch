const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : [true, "All users must have a name"],
        minLength: [3, "Name must be at least 3 Charactors"]
    },
    lastName:{
        type : String,
        required :  [true, "All users must have a type"],
        minLength: [3, "Type must be at least 3 Charactors"]
        
    },
    email:{
        type : String,
        required :  [true, "The user must be interesting enough to say somthung about it"],
        minLength: [3, "Description must be at least 3 Charactors"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    subscribe:{
        type : Boolean, 
        
    },
    password:{
        type : String, 
        required : [true, "Dont forget to make your password."],
        minLength : [8, "Your password should be at least 8 charactors long"]
    }

}, {timestamps:true})

const user = mongoose.model ("user", userSchema);

module.exports = user;