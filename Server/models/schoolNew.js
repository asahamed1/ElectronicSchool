const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/schoolsystem");
 
autoIncrement.initialize(connection);

 const newsSheama = mongoose.Schema({
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



newsSheama.plugin(autoIncrement.plugin, 'schoolLatestNews');

mongoose.model("schoolLatestNews",newsSheama)

