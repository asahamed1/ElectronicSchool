let mongoose = require('mongoose'),
    express = require ('express'),
    controlRoute = express.Router();

    var jwt = require('jsonwebtoken');

require("../models/StudentProModel");
let studentSchema = mongoose.model("StudentsPro");

require('../models/studentSubjectModel');
let studentSubjectSchema = mongoose.model('studentSubject');

require('../models/controlState');
let States = mongoose.model('controlState');
// only get student & Student Subject and add degrees 
controlRoute.get('/AllStudent',(request,response)=>{
    studentSchema.find({}).then((data=>{
        response.send(data)
    })).catch((error)=>{console.log(error)});
})

controlRoute.route('/AddDegrees/:id')
            .get((request,response)=>{
            // will send name and year in body
            studentSubjectSchema.find({}).then((data)=>{
                studentSchema.find({}).then((stds=>{
                    stds.forEach((std)=>{
                        if(std.FullName==request.params.id){
                                data.forEach((stdSubject)=>{
                                 if(std.Class==stdSubject.ClassNo)
                                 {
                                     
                                    response.send(stdSubject.Subject)
                                     // response.render('controldegree',{stdData:stdSubject.Subject});
                                 }
                                })
                        }
                    })
                })).catch((error)=>{console.log(error)});        
            })})
controlRoute.put('/AddDegrees',(request,response)=>{
    // will edit  using national ID add degree 
    studentSchema.updateOne({NationalID:request.body.NationalID},{
        $set: {Degree:request.body.Degree}
  }).then(data=>{
    response.send(data)}).catch(err=>response.send(err));

})
 /// state of control to appear degrees to students or parents or not
controlRoute.put('/State',(request,response)=>{
        States.updateOne({_id:0},{
            state:request.body.state
        }).then(data=>response.send(data)).catch(error=>console.log(error))
})  ;        
controlRoute.get('/State',(request,response)=>{
    States.findOne({_id:0}).then(data=>{
        response.send(data)
    })
})  ;        
             
var decodedToken='';
function verifyToken(req,res,next){
  // let token = req.query.token;
  
  // Get Token Value From Http Header 
  let token = req.get("token");
  console.log(token)
 
  jwt.verify(token,'Control', function(err, tokendata){
    if(err){
      console.log(
        'ffffffff'
      )
      
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
        console.log("hi")
      console.log(tokendata)
      decodedToken = tokendata;
      next();
    }
  })
}

module.exports = controlRoute;

