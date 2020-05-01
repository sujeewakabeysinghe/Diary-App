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
        firstName:req.body.firstName,
        lastName:req.body.LastName,
        company:req.body.company,
        mobileNo:req.body.mobileNo,
        landPhoneNo:req.body.LandPhoneNo,
        officeNo:req.body.officeNo,
        email:req.body.email,
        website:req.body.website,
        address:req.body.address,
        notes:req.body.notes
    });
    Contact.createcontact(NewContact,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed to Save!"});
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


module.exports=Router;