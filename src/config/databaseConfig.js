const mongoose = require("mongoose");

const connect = ()=>{
    console.log("requersted for mongoose comnnection");
    return mongoose.connect("mongodb://localhost/ElectionData")

}


module.exports = connect;