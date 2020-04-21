let mongoose= require("mongoose");

// let autoIncrement = require('mongoose-auto-increment');
// var connection = mongoose.createConnection("mongodb://localhost:27017/itiDBReact");
// autoIncrement.initialize(connection);

let loginSchema= new mongoose.Schema({

    NationalID:Number,
    Password:Number,
    user:String,
});

mongoose.model("LoginSchema",loginSchema);