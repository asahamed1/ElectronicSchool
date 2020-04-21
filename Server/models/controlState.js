let mongoose= require('mongoose');
let autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/SchoolDB");

autoIncrement.initialize(connection);
let controlStateSchema = new mongoose.Schema({
    state:[]
});
controlStateSchema.plugin(autoIncrement.plugin, 'controlState');
mongoose.model('controlState',controlStateSchema);