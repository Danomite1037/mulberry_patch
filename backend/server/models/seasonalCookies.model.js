const mongoose = require("mongoose");

const seasonalCookiesSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "All seasonalCookiess must have a name"],
    },
    price:{
        type : mongoose.Decimal128,
        required :  [true, "You cain't lr=eave this field blank"],
        
    },
    img:{
        type : String
        
    },
    holiday:{
        type : String,
        required : [true, "please select what holiday this is for"]
    },
    description:{
        type : String, 
        required : [true, "The seasonalCookies must be interesting enough to say somthing about it"]
    }

}, {timestamps:true})

const seasonalCookies = mongoose.model ("seasonalCookies", seasonalCookiesSchema);

module.exports = seasonalCookies;