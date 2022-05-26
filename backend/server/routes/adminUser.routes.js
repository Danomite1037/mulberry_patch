const adminUserController = require("../controllers/adminUser.controller");

module.exports = app => {
    app.get("/api/test", adminUserController.testResponse)
    app.get("/api/adminUser/all", adminUserController.allAdminUsers)
    app.post("/api/adminUser/create", adminUserController.createAdminUser)
    app.get ("/api/adminUser/findOne/:_id", adminUserController.getOneAdminUser)
    app.delete("/api/adminUser/deleteAdminUser/:_id", adminUserController.deleteAdminUser)
    app.patch("/api/adminUser/updateAdminUser/:_id", adminUserController.updateAdminUser)
}