const orders = require("../models/orders.model");
const ordersRoutes = require("../routes/orders.routes");

module.exports.testResponse = (req,res) => {
    res.json({message: "i hope this works"});
}
module.exports.allOrders = (req,res) => {
    orders.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.createOrders = (req, res) => {
    orders.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.updateOrders = (req, res) => {
    orders.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.getOneOrder = (req, res) => {
    orders.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}
module.exports.deleteOrders = (req, res) => {
    orders.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({messege:"You broke it try again", err}))
}