const cocoaBomb = require("../models/cocoaBombs.model");
const cocoaBombRoutes = require("../routes/cocoaBombs.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allCocoaBombs = (req,res) => {
    cocoaBomb.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createCocoaBomb = (req, res) => {
    cocoaBomb.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateCocoaBomb = (req, res) => {
    cocoaBomb.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneCocoaBomb = (req, res) => {
    cocoaBomb.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteCocoaBomb = (req, res) => {
    cocoaBomb.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}