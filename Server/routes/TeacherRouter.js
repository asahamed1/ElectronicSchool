let express = require("express");
const mongoose = require("mongoose");
 let router = express.Router();
  require("../models/TeacherSchema");
  require('../models/studentSubjectModel')
 let teacherShema =  mongoose.model("Teachers");
 let classesSheama = mongoose.model('studentSubject');
console.log("ddddddd")
 var jwt = require('jsonwebtoken');

 router.get("/list",(request,response)=>{
     console.log("hhhhhhhhhhhelo")
    teacherShema.find({}).then((teachers)=>{
      console.log()
          response.send(teachers)
    })
})

router.post("/add",(request,response)=>{
console.log(request.body)
let teacher = new teacherShema({
fullName:request.body.fullName,
Address:request.body.Address,
nationalId:request.body.nationalId,
userName:request.body.userName,
password:request.body.password,
phoneNumber:request.body.phoneNumber,
salary: request.body.salary,
DOH:request.body.DOH,
subjects:request.body.subjects
})
teacher.save().then((data)=>{
    console.log(data)
 response.send(data)
}).catch((error)=>{
response.send(error)
})
})
//router.post("/addsubject",(request,response)=>{
/// get teacher

router.get("/edit/:id",(request,response)=>{
      teacherShema.findOne({_id:request.params.id}).then((teacher)=>{
          console.log(teacher)
            response.send(teacher)
      }).catch((error)=>{
             response.send(error)
      })
})

// edit teacher data 
router.put("/edit",(request,response)=>{
teacherShema.updateOne({_id:request.body._id},{
$set:{
 fullName:request.body.fullName,
 Address:request.body.address,
 nationalId:request.body.nationalId,
 userName:request.body.userName,
 password:request.body.password,
 phoneNumber:request.body.phoneNumber,
}}

).then((data)=>{
response.send(data)
}).catch((error)=>{
response.send(error)
})
})
// update salary
router.put("/editsalray",(request,response)=>{
          console.log(request.body)

    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            salary:request.body.salary


        }
    }).then((data)=>{
           response.send(data)
    }).catch((error)=>{
     response.send(error)

    })

})

router.put("/edit/subject",(request,response)=>{
teacherShema.updateOne({_id:request.body.id},{
 $set:{
     subjects:request.body.subjects,
 } 
})
})
// delete teacher 
router.delete("/delete/:id",(request,response)=>{
teacherShema.deleteOne({_id:request.params.id}).then((data)=>{
response.send(data)
})
})

router.post("/teacherTable",(request,response)=>{
console.log(request.body)
  classesSheama.find({ClassNo:{$in:request.body.classArray}}).then((data)=>{
                      response.send(data)
  }).catch((error)=>{
                response.send(error)
  })
})
router.get("/checkEmployeeExist/:nationalId",(request,response)=>{
    console.log(request.body)
teacherShema.findOne({nationalId:request.params.nationalId})
.then((emp)=>{
    response.send(emp)

})
.catch((error)=>{
         response.send(error)
})

})
var decodedToken='';
function verifyToken(req,res,next){
  // let token = req.query.token;
  
  // Get Token Value From Http Header 
  let token = req.get("token");
  console.log(token)
 
  jwt.verify(token,'EmployeeAffaires', function(err, tokendata){
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

module.exports = router;