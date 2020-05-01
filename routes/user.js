const Express=require("express");
const User=require("../models/user");
const Router=Express.Router();
const JsonWebToken=require("jsonwebtoken");
const Config=require("../config/database");
const Passport=require("passport");


Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


Router.post("/register",(req,res)=>{
    const NewUser=new User({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    });
    User.registeruser(NewUser,(err)=>{
        if(err){
            res.json({state:false,msg:"Failed to Register!"});
        }
        else{
            res.json({state:true,msg:"Successfully Registered!"});
        }
    });
});


Router.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.getuserbyemail(email,(err,user)=>{
        if(err) throw err;
        if(user){
            User.checkpassword(password,user.password,(err,match)=>{
                if(err) throw err;
                if(match){
                    const token=JsonWebToken.sign(user.toJSON(),Config.secret,{expiresIn:30});
                    res.json({state:true,msg:"Have a Great Day "+user.username+"!",token:"Bearer "+token}); 
                }
                else{
                    res.json({state:false,msg:"Wrong Password!"});
                }
            });
        }
        else{
            res.json({state:false,msg:"Wrong E-Mail!"});
        }
    });
});


Router.get("/profile",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({user:req.user});
});


module.exports=Router;