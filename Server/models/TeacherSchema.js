let  mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDBB");

autoIncrement.initialize(connection);

let techerSchema = mongoose.Schema({
fullName:String,

Address:String,
DOH:String,

userName:String,
password:String,
phoneNumber:Number,
role:String,
nationalId: Number,

salary:Number,
subjects:{

"subjectName":{type:String},
  "classesName":[{
    "_id":String,
    "ClassNo":String

    }]
},



},{_id:false})
techerSchema.plugin(autoIncrement.plugin, 'Teachers');

mongoose.model("Teachers",techerSchema)
