let express = require('express'),
    mongoose = require('mongoose'),
    SubjectRoute = express.Router();
let jwt = require('jsonwebtoken')
    // SubjectRoute.use((request,reponse,next)=>{
    //     console.log("ssssssssssssssssssss")
    //     // console.log(request.session)
    //     // console.log(request.session.role)
    //     if (request.session.role=="StudentAffaires"){
    //         console.log('heedae')
    //         next();}
    //     else {
    //     console.log('role',request.session.role)
            
    //         // reponse.redirect("/login")
    //     };  
    // });
    
// Student Subject Schema
require('../models/studentSubjectModel');
let studentSubjectSchema = mongoose.model('studentSubject');

SubjectRoute.route('/subject')
            .get((request,response)=>{
                studentSubjectSchema.find({})
                        .then((data)=>{
                            response.send(data)
                            // response.render("subject",{ClassSubject:data});
                        })
                        .catch((error)=>{response.send(error)});
            })
            .post(verifyToken,(request,response)=>{
                let subjectObject =  new  studentSubjectSchema({
                    // _id:request.body._id,
                    ClassNo    :request.body.ClassNo,
                    StudentNo  :request.body.StudentNo,
                    Subject    :request.body.Subject,
                    Table      :[]
                });
                subjectObject.save()
                    .then((data)=>{
                        // response.redirect("/subject")
                        response.send(data)
                    })
                    .catch((error)=>{response.send(error)});
            })
            .put((request,response)=>{
                studentSubjectSchema.updateOne({_id:request.body._id},{
                        ClassNo:request.body.ClassNo,
                        StudentNo:request.body.StudentNo,

                }).then(data=>response.send(data)).catch(err=>response.send(err));
            })
            .delete((request,response)=>{
                studentSubjectSchema.deleteOne({_id:request.body._id})
                        .then(data=>response.send(data)).catch(err=>response.send(err));


            });
SubjectRoute.get('/subject/:id',(request,response)=>{
    studentSubjectSchema.find({_id:request.params.id})
            .then((data)=>{
                response.send(data)
                // response.render("subject",{ClassSubject:data});
            })
            .catch((error)=>{response.send(error)});
});
// For adding Table To Class Subject
SubjectRoute.put('/subject/Table',(request,response)=>{
    studentSubjectSchema.updateOne({_id:request.body._id},{
           Table:request.body.Table
    }).then(data=>response.send(data)).catch(err=>response.send(err));
})
var decodedToken='';
    function verifyToken(req,res,next){
      // let token = req.query.token;
      
      // Get Token Value From Http Header 
      let token = req.get("token");
      console.log(token)
     
      jwt.verify(token,'StudentAffaires', function(err, tokendata){
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
module.exports = SubjectRoute;