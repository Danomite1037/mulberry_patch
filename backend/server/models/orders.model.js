const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userFirstName:{
        type : String,
        required : [true, "All orders must have a name"],
    },
    userLastName:{
        type : String,
        required :  [true, "You cain't leave this field blank"],
        
    },
    productName:{
        type : String,
        required :  [true, "You cain't leave this field blank"],
        
    },
    quantityAmount:{
        type : Number,
        required : [true, "Please enter the amount of cookies you would like to order"]
        
    },
    quantityUnit:{
        type : String,
        required : [true, "Please select either Ea or Dozen"]
        
    },
    phoneNumber:{
        type : Number, 
        required : [true, "Please submit a contact number"]
    },
    readyBy:{
        type : Date,
        min : Date.now,
        required : [true, "Please provide a date the order should be ready by "]
    },
    total:{
        type : mongoose.Decimal128,
        required : [true, "Please provide a date the order should be ready by "]
    },
    inspoImg : {
        type : String
    }

}, {timestamps:true})

const order = mongoose.model ("order", orderSchema);

module.exports = order;