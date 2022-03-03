const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//REGISTER
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
 
//LOGIN
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
    
        if(!user){
            console.log('dfdfdfd');
            res.status(401).json("Wrong password or username!")
            return;
        }

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        if(originalText !== req.body.password){
            res.status(401).json("Wrong password or username!")
            return; 
        }

        const {password, ...info} = user._doc;
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
             process.env.SECRET_KEY, 
             { expiresIn: "5d"}
             );
        res.status(200).json({...info, token});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;