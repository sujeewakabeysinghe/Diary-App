const Express=require("express");
const Contact=require("../models/contact");
const Router=Express.Router();
const Passport=require("passport");


Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


Router.post("/createcontact",(req,res)=>{
    const NewContact=new Contact({
        userId:req.body.userId,
        fullName:req.body.fullName,
        contactNo:req.body.contactNo
    });
    Contact.createcontact(NewContact,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed To Save!"});
        }
        else{
            res.json({state:true,msg:"Successfully Saved!"});
        }
    });
});


Router.get("/readcontact",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    Contact.getcontactsbyuserid(req.user._id,(err,contacts)=>{
        if(err) throw err;
        res.json({state:true,contact:contacts});
    });
});

Router.post("/deletecontact",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const contactId=req.body.contactId;
    Contact.deletecontact(contactId,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Delete!"});
      }
      else{
        res.json({state:true,msg:"Successfully Deleted!"})
      }
    });
});

module.exports=Router;