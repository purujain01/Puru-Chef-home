const express = require("express");
const router = express.Router();
var validator = require('validator');
const jwt = require('jsonwebtoken');
const db = require("../models");
const passport = require("../passport");

require("dotenv").config();


// router.post("/signup", function (req, res) {
//   if( req.body.username && req.body.email && req.body.password && req.body.phone && req.body.otp){
//     if(!validator.isEmail(req.body.email)){
//       return res.json({ status:"failed",message: "Not a valid email" });
//     }
//     if(!validator.isMobilePhone(req.body.phone,['en-IN'])){
//       return res.json({ status:"failed",message: "Not a valid phone number" });
//     }
//     //checking  if user  is verified his otp or not 
//     db.OTP.findOne({email:req.body.email,phone:req.body.phone})
//     .then((function(otpModel){
//           if(otpModel){
//             if(otpModel.verified){
//               db.Admin
//                 .create({
//                   username: req.body.username,
//                   email: req.body.email,
//                   mobileNo1: req.body.phone,
//                   password: req.body.password
//                 })
//                 .then(function () {
//                   res.json({status:"success",message:"Admin created successfully"});
//                 })
//                 .catch(function (err) {
//                   console.log(err)
//                   res.json({ status:"failed",message: "something went wrong!" });
//                 });
//             }else{
//               //if user not verified the otp we need to inform the user
//               res.json({ status:"failed",message: "Plse verifiy your mobile to signup" });
//             }
//           }
//     }));
    
//     return;
//   }
//   res.json({status:"failed",message: "missing data" })
// });



router.post("/login", (req, res)=>{
  passport.authenticate("admin_local",{session: false},
    (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           //filtering user id and email for payload and setting exp time as 3 day
           let payload=JSON.stringify({"id":user._id,username:user.username,"email":user.email, exp: Math.floor(Date.now() / 1000) + (60 * 60*24*3)});
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(payload, process.env.JWT_KEY);
           return res.json({token});
        });
    })(req,res)});



module.exports = router;
