let express = require("express")
const mongoose  =require("mongoose")
let activityRouter = express.Router();
require("./../Models/activityModel");
multer = require('multer')
var jwt = require('jsonwebtoken');

let activityScheama = mongoose.model("achollActivites")


// Multer File upload settings
const DIR = './public/upload/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg"|| file.mimetype == "image/jfif" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}

);
/* ******* get all Activity ********** */
activityRouter.get("/allActivity",(request,response)=>{
    activityScheama.find({})
            .then((allActivity)=>{
                console.log(allActivity)
                response.send(allActivity)
            })
            .catch((error)=>{
                response.send(error)
            })
})
 /************************************************* */
// activityRouter.post("/addActivity",(request,response)=>{
//     let activity = new activityScheama({
//         img:request.body.img,
//         title:request.body.title,
//         description:request.body.description
//               })
//               activity.save().then((obj)=>{
//                       response.send(obj)
//               })
//     })
/***********************************Post Activity */
    activityRouter.post("/addActivity",upload.single('img'),(request,response)=>{
        const url = request.protocol +'://' + request.get('host')
        console.log(request)
        console.log(request.body,'nnnnnn')
           let  news = new activityScheama({
                img: url + '/public/upload/' + request.file.filename,
                title:request.body.title,
                description:request.body.description
           })
          news.save().then((news)=>{
               console.log(news)
             response.send(news)
           }).catch((error )=>{
                       response.send(error)
           })
    })
/******************delete  Activity***************************** */ 
activityRouter.delete("/deletActivity",(request,response)=>{
    console.log(request.body)
    activityScheama.deleteOne({_id:request.body.id}).then((data)=>{
        response.send(data)
    }).catch((error)=>{
        response.send(error)
    })
})
//  .delete((request,response)=>{
//         activityScheama.deleteOne({_id:request.body.id}).then((data)=>{
//                  response.send(data)
//         })
//     })
/**************************************************** */
// var decodedToken='';
// function verifyToken(req,res,next){
  // let token = req.query.token;
  
  // Get Token Value From Http Header 
  // let token = req.get("token");
  // console.log(token)
 
  // jwt.verify(token,'admin', function(err, tokendata){
  //   if(err){
  //     console.log(
  //       'ffffffff'
  //     )
      
  //     return res.status(400).json({message:' Unauthorized request'});
  //   }
  //   if(tokendata){
  //       console.log("hi")
  //     console.log(tokendata)
  //     decodedToken = tokendata;
  //     next();
  //   }
  // })
// }

module.exports =activityRouter