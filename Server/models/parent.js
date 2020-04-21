let mongoose=require("mongoose");
//parent schema
let parentSchema= new mongoose.Schema(
    {
      _id:Number,
      name:String,
      userName:String,
      password:String,
      nationalId:Number,
      Address:String,
      phoneNumber:Number,
      student_nationalId:Number
});
mongoose.model("parent",parentSchema);