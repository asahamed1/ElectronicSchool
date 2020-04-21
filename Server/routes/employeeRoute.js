let express = require('express'),
    mongoose = require('mongoose'),
    employeeRoute = express.Router();
    var jwt = require('jsonwebtoken');

// Employee Subject Schema
require('../models/employeeModel');
let employeeSchema = mongoose.model('employee');

employeeRoute.route('/employee')
            .get((request,response)=>{
                employeeSchema.find({})
                        .then((data)=>{
                            response.send(data);
                        })
                        .catch((error)=>{response.send(error)});
            })
            .post((request,response)=>{
              // console.log(request.body)
                let employeeObject =  new  employeeSchema({
                    // _id:request.body._id,
                    FullName:request.body.FullName,
                    NationalID:request.body.NationalID,
                    Password:request.body.Password,
                    Salary:request.body.Salary,
                    Address:request.body.Salary,
                    PhoneNumber:request.body.PhoneNumber,
                    DOB:request.body.DOB,
                    DOJ:request.body.DOJ,
                    Faculty:request.body.Faculty,
                    Role:''
               });
                employeeObject.save()
                    .then((data)=>{response.send(data);})
                    .catch((error)=>{response.send(error)});
            })
            .put((request,response)=>{
                employeeSchema.updateOne({NationalID:request.body.NationalID},{
                        FullName:request.body.FullName,
                        NationalID:request.body.NationalID,
                        Password:request.body.Password,
                        Salary:request.body.Salary,
                        Address:request.body.Address,
                        PhoneNumber:request.body.PhoneNumber,
                        Faculty:request.body.Faculty,

                         DOB:request.body.DOB,
                         DOJ:request.body.DOJ,
                         Role:request.body.Role
                  }).then(data=>{console.log(data);response.send(data)}).catch(err=>response.send(err));
            })
            .delete((request,response)=>{
                employeeSchema.deleteOne({_id:request.body._id})
                        .then(data=>response.send(data)).catch(err=>response.send(err));
            });

            employeeRoute.get('/employee/:id',(request,response)=>{
                employeeSchema.findOne({_id:request.params.id})
                        .then((data)=>{
                            response.send(data)
                            // response.render("subject",{ClassSubject:data});
                        })
                        .catch((error)=>{response.send(error)});
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
            
module.exports = employeeRoute;