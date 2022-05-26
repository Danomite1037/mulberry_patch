const mongoose = require("mongoose");

const specialtyCookiesSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "All specialtyCookiess must have a name"],
    },
    price:{
        type : mongoose.Decimal128,
        required :  [true, "You cain't lr=eave this field blank"],
        
    },
    img:{
        type : String
        
    },
    description:{
        type : String, 
        required : [true, "The specialtyCookies must be interesting enough to say somthing about it"]
    }

}, {timestamps:true})

const specialtyCookies = mongoose.model ("specialtyCookies", specialtyCookiesSchema);

module.exports = specialtyCookies;