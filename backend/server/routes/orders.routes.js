const ordersController = require("../controllers/orders.controller");

module.exports = app => {
    app.get("/api/test", ordersController.testResponse)
    app.get("/api/orders/all", ordersController.allOrders)
    app.post("/api/orders/create", ordersController.createOrders)
    app.get ("/api/orders/findOne/:_id", ordersController.getOneOrder)
    app.delete("/api/orders/deleteOrders/:_id", ordersController.deleteOrders)
    app.patch("/api/orders/updateOrders/:_id", ordersController.updateOrders)
}