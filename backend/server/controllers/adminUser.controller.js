const adminUser = require("../models/adminUser.model");
const adminUserRoutes = require("../routes/adminUser.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allAdminUsers = (req,res) => {
    adminUser.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createAdminUser = (req, res) => {
    adminUser.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateAdminUser = (req, res) => {
    adminUser.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneAdminUser = (req, res) => {
    adminUser.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteAdminUser = (req, res) => {
    adminUser.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}