let mongoose=require('mongoose'),
    subjectTableSchema = new mongoose.Schema({
        _id:Number,
        Year:Number,
        ClassNo:String,
        DaySubject:['Math','Arabic','Religion','English']
    });

    mongoose.model('StudentTable',subjectTableSchema);