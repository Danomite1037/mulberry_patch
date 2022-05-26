const user = require("../models/user.model");
const userRoutes = require("../routes/user.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allUsers = (req,res) => {
    user.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createUser = (req, res) => {
    user.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateUser = (req, res) => {
    user.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneUser = (req, res) => {
    user.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteUser = (req, res) => {
    user.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}