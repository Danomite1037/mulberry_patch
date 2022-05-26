const specialtyCookieController = require("../controllers/specialtyCookies.controller");

module.exports = app => {
    app.get("/api/test", specialtyCookieController.testResponse)
    app.get("/api/specialtyCookie/all", specialtyCookieController.allSpecialtyCookies)
    app.post("/api/specialtyCookie/create", specialtyCookieController.createSpecialtyCookies)
    app.get ("/api/specialtyCookie/findOne/:_id", specialtyCookieController.getOneSpecialtyCookies)
    app.delete("/api/specialtyCookie/deleteSpecialtyCookie/:_id", specialtyCookieController.deleteSpecialtyCookies)
    app.patch("/api/specialtyCookie/updateSpecialtyCookie/:_id", specialtyCookieController.updateSpecialtyCookies)
}