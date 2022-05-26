const seasonalCookies = require("../models/seasonalCookies.model");
const seasonalCookiesRoutes = require("../routes/seasonalCookies.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allSeasonalCookies = (req,res) => {
    seasonalCookies.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createSeasonalCookies = (req, res) => {
    seasonalCookies.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateSeasonalCookies = (req, res) => {
    seasonalCookies.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneSeasonalCookies = (req, res) => {
    seasonalCookies.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteSeasonalCookies = (req, res) => {
    seasonalCookies.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}