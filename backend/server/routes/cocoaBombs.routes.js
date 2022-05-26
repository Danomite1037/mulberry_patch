const cocoaBombController = require("../controllers/cocoaBombs.controllers");

module.exports = app => {
    app.get("/api/test", cocoaBombController.testResponse)
    app.get("/api/cocoaBomb/all", cocoaBombController.allCocoaBombs)
    app.post("/api/cocoaBomb/create", cocoaBombController.createCocoaBomb)
    app.get ("/api/cocoaBomb/findOne/:_id", cocoaBombController.getOneCocoaBomb)
    app.delete("/api/cocoaBomb/deleteCocoaBomb/:_id", cocoaBombController.deleteCocoaBomb)
    app.patch("/api/cocoaBomb/updateCocoaBomb/:_id", cocoaBombController.updateCocoaBomb)
}