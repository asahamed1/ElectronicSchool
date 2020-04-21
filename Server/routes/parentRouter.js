let express=require("express");
let parentRouter=express.Router();
let mongoose=require("mongoose");
const router = express.Router();
require("../models/parent");
let parentSchema=mongoose.model('parent')
let jwt = require("jsonwebtoken");

/******************Create Parent*/

// parentRouter.post('/add', (req, res) => {
//     const newParent =new parentSchema({
//       id: req.body._id,
//       name: req.body.name,
//       email: req.body.email,
//     //   userName:req.body.userName,
//     //   password:req.body.password,
//       nationalId:req.body.nationalId,
//       Address:req.body.Address,
//       phoneNumber:req.body.phoneNumber
//     });
//     newParent.save().then(data=>{
//         response.redirect("/events/home")
//     }).catch((error)=>{response.send(error)})
  
//     // if (!newParent.name || !newParent.email) {
//     //   return res.status(400).json({ msg: 'Please include a name and email' });
//     // }
  
//     // parentSchema.push(newParent);
//     // res.json(parentSchema);
//   });


  

//   /*********************edit Parent*/
//   parentRouter.get("/edit/:id",(request,response)=>{
//     parentSchema.findOne({_id:request.params._id})
//     .then(data=>{
//         response.render("parent/editparent",{parent:data}); 
//     })
//     .catch(error=>response.send(error))

//      });//edit get
//      parentRouter.post("/edit/:id",(request,response)=>{
//         parentSchema.updateOne({_id:request.params.id}
//             ,{
//                 $set:{ name: req.body.name,
//                     userName:req.body.userName,
//                     password:req.body.password,
//                     nationalId:req.body.nationalId,
//                     Address:req.body.Address,
//                     phoneNumber:req.body.phoneNumber
//             }
//             })
//             .then((data)=>{
//                 response.redirect("/parent/home");
//             })
//             .catch((error)=>{response.send(error)})
// });//edit post

//   /******************Delete Parent */
//   parentRouter.get("/delete/:id",(request,response)=>{
//     parentSchema.deleteOne({_id:request.params._id})
//                 .then(()=>{
//                     response.redirect("/events/home");
//                 }).catch(()=>{
//                     response.send(error);
//                 })
// });//delete

/*************************************************Another way */
//parents --> get --> find all
parentRouter.route("/parents")
    .get((request, response) => {
        parentSchema.find({})
            .then(data => { response.send(data); })
            .catch((err) => {
                response.send({ err: err.errmsg });
            //     response.status(404).send({
            //         message: "Note not found with id " 
             });
    })
     //add parents and sending parametere with request body
    .post(verifyToken,(request, response) => {
        // console.log("request ",request.body)
        let newParent =new parentSchema({
            _id: request.body._id,
            name: request.body.name,
            userName:request.body.userName,
            password:request.body.password,
            nationalId:request.body.nationalId,
            Address:request.body.Address,
            phoneNumber:request.body.phoneNumber,
            student_nationalId:request.body.student_nationalId
            // Student: request.body.Student
        });
        console.log('jj')
        console.log("object you want add", newParent);
            newParent.save().then(data => {
                console.log(data)
            response.send(data);
        }).catch(err => {
            response.send({ err: err.errmsg });
        });
    })
    .put(verifyToken,(request, response) => {
        // console.log(request.body)
        parentSchema.updateOne({ _id: request.body._id }, {
            name: request.body.name,
            userName:request.body.userName,
            password:request.body.password,
            nationalId:request.body.nationalId,
            Address:request.body.Address,
            phoneNumber:request.body.phoneNumber,
            student_nationalId:request.body.student_nationalId

        }).then((data) => {
            console.log(data)
            response.send(data);
        }).catch((err) => {
            response.send({ err: err.errmsg });
        });
    })

    .delete((request, response) => {
        let parent;
        parentSchema.findOne({ _id: request.body.id })
            .then(data => { parent = data; });
           
        parentSchema.deleteOne({ _id: request.body.id }, (err) =>{
            console.log("here");
            if (!err) response.send(parent);
            else response.send(err);
    });
});
parentRouter.get("/parents/details/:_id",(request,response)=>{
    parentSchema.findOne({_id:request.params._id})
    .then((data)=>{
        response.send(data)
    }).catch((error)=>{
        response.send(error)
    })
});
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
        console.log("tokenken vervied coorect ")
      console.log(tokendata)
      decodedToken = tokendata;
      next();
    }
  })
}
    
module.exports=parentRouter;