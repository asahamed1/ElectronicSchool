let mongoose= require("mongoose");
let autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDBb");
autoIncrement.initialize(connection);

let studentproSchema= new mongoose.Schema({
    // _id:Number,
    FullName:String,
    NationalID:Number,
    Password:String,
    Adress:String,
    DOB:Date,
        DOJ:Date,
    PhoneNumber:Number,
    Class:String,
    Degree:[
        // {subjectNasme:"",degree:""},{}...
    ],
    // Table:{
    //     //classNo : ,[{subjectName: , teachername},...,....,...]

    // }, 
});

studentproSchema.plugin(autoIncrement.plugin, 'StudentsPro');
mongoose.model("StudentsPro",studentproSchema);


