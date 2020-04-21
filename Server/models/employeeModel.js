let mongoose=require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDB");

autoIncrement.initialize(connection);

  let  employeeSchema = new mongoose.Schema({
        _id:Number,
        FullName:String,
        NationalID:Number,
        Password:String,
        Salary:Number,
        DOB:Date,
        DOJ:Date,
        Faculty:String,
        Address:String,
        PhoneNumber:Number,
        Role:String
    });
    employeeSchema.plugin(autoIncrement.plugin, 'employee');
mongoose.model('employee',employeeSchema);