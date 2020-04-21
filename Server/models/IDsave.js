let mongoose= require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDB");

autoIncrement.initialize(connection);
let IDSchema = new mongoose.Schema({
    _id:0,
    Value:Number
});
IDSchema.plugin(autoIncrement.plugin, 'ID');
mongoose.model('ID',IDSchema);