const seasonalCookieController = require("../controllers/seasonalCookies.controller");

module.exports = app => {
    app.get("/api/test", seasonalCookieController.testResponse)
    app.get("/api/seasonalCookie/all", seasonalCookieController.allSeasonalCookies)
    app.post("/api/seasonalCookie/create", seasonalCookieController.createSeasonalCookies)
    app.get ("/api/seasonalCookie/findOne/:_id", seasonalCookieController.getOneSeasonalCookies)
    app.delete("/api/seasonalCookie/deleteSeasonalCookie/:_id", seasonalCookieController.deleteSeasonalCookies)
    app.patch("/api/seasonalCookie/updateSeasonalCookie/:_id", seasonalCookieController.updateSeasonalCookies)
}