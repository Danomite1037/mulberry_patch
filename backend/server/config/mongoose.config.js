const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/MalberryPatch", {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then (()=> console.log("We have connected to the db for now"))
    .catch(err => console.log("i told you it would only work for now", err))