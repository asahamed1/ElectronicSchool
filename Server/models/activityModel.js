const  mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolActivity");

const ActivitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img:{
        
        type:String
       },
    title:{
         type:String
       },
    description:{
         type:String
       }
})

ActivitySchema.plugin(autoIncrement.plugin, 'SchoolLatestActivities');
mongoose.model("achollActivites",ActivitySchema)