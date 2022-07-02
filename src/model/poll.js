const mongoose = require("mongoose")

const pollSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true
    },
   options:{
        type:String,
    }
},{timestamps:true});

const pollModel = mongoose.model('Poll', pollSchema);

module.exports = pollModel;