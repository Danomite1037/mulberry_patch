const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "All Users must have a First Name"],
    },
    lastName: {
        type: String,
        required: [true, "All Users must have a Last Name"],
    },
    email: {
        type: String,
        required: [true, "All Users must enter an Email"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Dont forget to create your password."],
        minLength: [8, "Your password should be at least 8 charactors long"]
    },
    subscribe: {
        type: Boolean
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const user = mongoose.model("user", userSchema);

module.exports = user;