const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended:true}));
const cors = require("cors");
app.use(cors());

// app.get("/api/test", (req, res)=>{
//     res.json({message:"Working just fine!"});
// });

require("./server/config/mongoose.config");

require("./server/routes/user.routes")(app);
require("./server/routes/adminUser.routes")(app);
require("./server/routes/cocoaBombs.routes")(app);
require("./server/routes/orders.routes")(app);
require("./server/routes/seasonalCookies.routes")(app);
require("./server/routes/specialtyCookies.routes")(app);


const server = app.listen(port, ()=>console.log(`running on port ${port}`));
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => {
    console.log(socket.id);
});