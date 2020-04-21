let mongoose=require('mongoose'),
    controlSchema = new mongoose.Schema({
        _id:Number,
        StudentName:String,
        Year:Number,
        SubjectName:{
            type:Number,
            ref:"studentSubject"
        },
        Degrees:[]
    });

    mongoose.model('Control',controlSchema);