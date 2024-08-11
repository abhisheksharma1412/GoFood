const express=require('express');
const router=express.Router();
const User=require('../models/User')
const {  body, validationResult } = require('express-validator');

const jwt=require('jsonwebtoken');
const secret="MyNAmeIsHardikSharmaWhatIsYourName1412";

const bcrypt=require('bcrypt');

router.post("/createuser",
    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
  body('password',"Incorrect password").isLength({ min: 5 }),
    async (req,res)=>{
    try{
        
        // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt= await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt);
await User.create({
    name: req.body.name,
    password: secPassword,
    email: req.body.email,
    location: req.body.location
})

res.json({success:true});
    }
    catch(error){
        console.log(error);
        res.json({success:false})
    }
})


//login

router.post("/loginuser",
    body('email').isEmail(),
  body('password',"Incorrect password").isLength({ min: 5 }),
    async (req,res)=>{

    try{
        // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
let userData=await User.findOne({
    email
})
 if(!userData){
     return res.status(400).json({ errors: "Try logging with correct credentials" });
     
 }

 const pwdcompare=await bcrypt.compare(req.body.password,userData.password);

 if(!pwdcompare){
    return res.status(400).json({ errors: "Try logging with correct credentials" });
 }


// if(req.body.password!==userData.password){
//     return res.status(400).json({ errors: "Try logging with correct credentials" });
//  }

 const data={
    user:{
        id:userData.id
    }
 }

 const authToken=jwt.sign(data,secret);
 return res.json({ success:true,authToken:authToken});

    }
    catch(error){
        console.log(error);
        res.json({success:false})
    }
})

module.exports=router;









// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Adjust the path if necessary

// router.post('/createuser', async (req, res) => {
//     try {
//         const newUser = new User({
//             name: req.body.name,
//             password: req.body.password,
//             email: req.body.email,
//             location: req.body.location
//         });

//         await newUser.save();
//         res.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false });
//     }
// });

// module.exports = router;