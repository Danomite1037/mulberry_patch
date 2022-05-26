const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : [true, "All adminUsers must have a name"],
        minLength: [3, "Name must be at least 3 Charactors"]
    },
    lastName:{
        type : String,
        required :  [true, "All adminUsers must have a type"],
        minLength: [3, "Type must be at least 3 Charactors"]
        
    },
    email:{
        type : String,
        required :  [true, "The adminUser must be interesting enough to say somthung about it"],
        minLength: [3, "Description must be at least 3 Charactors"]
    },
    status : {
        type : String,
        default: "Admin"
    },
    password:{
        type : String, 
        required : [true, "Dont forget to make your password."],
        minLength : [8, "Your password should be at least 8 charactors long"]
    }

}, {timestamps:true})

const adminUser = mongoose.model ("adminUser", adminUserSchema);

module.exports = adminUser;