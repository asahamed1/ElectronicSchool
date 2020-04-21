let express = require("express");
let loginRouter = express.Router();
let path = require("path");
let mongoose = require("mongoose");
let jwt = require('jsonwebtoken');

require("../models/LoginModel");
require("../models/StudentProModel");
require("../models/TeacherSchema");
require("../models/parent");
require("../models/employeeModel");
require('../models/IDsave')

let loginSchema = mongoose.model("LoginSchema");
let studentproSchema = mongoose.model("StudentsPro");
let parentSchema = mongoose.model("parent");
let teacherSchema = mongoose.model("Teachers");
let employeeSch = mongoose.model("employee");
let ID = mongoose.model('ID');

// let User = '';

loginRouter.post("/login", (request, response ) => {
    // console.log(response.send("DONE ...."));

    if (request.body.NationalID == 123456789 && request.body.Password == 123) {
        // console.log("hi am admin");
        // console.log(request.body);
        // User = "Admin";
        request.session.role='admin';
        response.send("admin");
    }

 else if (request.body.user=="Student") {
    //  console.log(request.body);
    studentproSchema.findOne({NationalID:request.body.NationalID,Password:request.body.Password}).
    then(student => {
        let token = jwt.sign({username:"Asmaa"},'Student', {expiresIn : '1000sec'});
        console.log(token)
        
        response.send({student:student,token:token});
    

    }).catch(err => {
        response.send(err)
        //  console.log("not found")
         });

     

 }else if(request.body.user=="Teacher"){
    
console.log(request.body)
     teacherSchema.findOne({nationalId:request.body.NationalID,password:request.body.Password}).
     then(teacher=>{
         console.log(teacher)
        let token = jwt.sign({username:"Asmaa"},'Teacher', {expiresIn : '1000sec'});
        console.log(token)
        // console.log(empEmployeeAffaires)
        response.send({teacher:teacher,token:token});
    })
     
 
 } else if (request.body.user=="Parent"){

    parentSchema.findOne({nationalId:request.body.NationalID,Password:request.body.password}).
    then(parent=>{
        let token = jwt.sign({username:"Asmaa"},'Parent', {expiresIn : '1000sec'});
        console.log(token)
        // console.log(empEmployeeAffaires)
        response.send({parent:parent,token:token});
    })
 }else if(request.body.user=="Control"){
     console.log(request.body)
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empControl=>{
        let token = jwt.sign({username:"Asmaa"},'Control', {expiresIn : '1000sec'});
        console.log(token)
        // console.log(empEmployeeAffaires)
        response.send({empControl:empControl,token:token});
     })
     
 }else if(request.body.user=="StudentAffaires"){
    // request.session.role='StudentAffaires';
    // console.log(request.session.role)
  console.log(request.body)
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empStudentAffairs=>{
        let token = jwt.sign({username:"Asmaa"},'StudentAffaires', {expiresIn : '1000sec'});
        console.log(token)
        // console.log(empEmployeeAffaires)
        response.send({empStudentAffairs:empStudentAffairs,token:token});
     })
        //  console.log(empStudentAffairs)
      
 }else if(request.body.user=="EmployeeAffaires"){
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empEmployeeAffaires=>{
        // request.session.role='EmployeeAffaires';
        let token = jwt.sign({username:"Asmaa"},'EmployeeAffaires', {expiresIn : '300sec'});
        console.log(token)
        console.log(empEmployeeAffaires)
        response.send({empEmployeeAffaires:empEmployeeAffaires,token:token});
     })
 }

});



module.exports = loginRouter;