const userController = require("../controllers/user.controller");

module.exports = app => {
    app.get("/api/test", userController.testResponse)
    app.get("/api/user/all", userController.allUsers)
    app.post("/api/user/create", userController.createUser)
    app.get ("/api/user/findOne/:_id", userController.getOneUser)
    app.delete("/api/user/deleteUser/:_id", userController.deleteUser)
    app.patch("/api/user/updateUser/:_id", userController.updateUser)
}