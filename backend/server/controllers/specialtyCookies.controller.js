const specialtyCookies = require("../models/specialtyCookies.model");
const specialtyCookiesRoutes = require("../routes/specialtyCookies.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allSpecialtyCookies = (req,res) => {
    specialtyCookies.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createSpecialtyCookies = (req, res) => {
    specialtyCookies.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateSpecialtyCookies = (req, res) => {
    specialtyCookies.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneSpecialtyCookies = (req, res) => {
    specialtyCookies.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteSpecialtyCookies = (req, res) => {
    specialtyCookies.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}