const express = require("express");
const  connect  = require("./src/config/databaseConfig");
const bodyParser = require("body-parser");
const User = require("./src/model/userModel");
const passport = require("passport");
const apiRouter = require("./src/routes/index");
require("./src/util/auth");
const authRouter  = require("./src/routes/authroute")
const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use("/api",passport.authenticate('jwt', {session: false}),apiRouter);

app.use("/",authRouter);



app.listen(3000,async ()=>{
     await connect()
    console.log("server Started Successfully")
    console.log("successfully data base is connected");
    
})