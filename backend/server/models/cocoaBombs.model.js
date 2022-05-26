const mongoose = require("mongoose");

const cocoaBombSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "All cocoaBombs must have a name"],
    },
    price:{
        type : mongoose.Decimal128,
        required :  [true, "You cain't leave this field blank"],
        
    },
    description:{
        type : String, 
        required : [true, "The cocoaBomb must be interesting enough to say somthing about it"]
    }

}, {timestamps:true})

const cocoaBomb = mongoose.model ("cocoaBomb", cocoaBombSchema);

module.exports = cocoaBomb;