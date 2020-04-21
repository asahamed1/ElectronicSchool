let mongoose = require('mongoose');
let autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDB");
autoIncrement.initialize(connection);

 let   studentSubjectSchema = new mongoose.Schema({
        _id:Number,
        ClassNo:String,
        StudentNo:Number,       
        Subject:[],
        Table:[]
      });
      studentSubjectSchema.plugin(autoIncrement.plugin, 'studentSubject');

mongoose.model('studentSubject',studentSubjectSchema)