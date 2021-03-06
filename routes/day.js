const Express=require("express");
const Day=require("../models/day");
const Router=Express.Router();
const Passport=require("passport");


Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


Router.post("/write",(req,res)=>{
    const NewDay=new Day({
        userId:req.body.userId,
        date:req.body.date,
        notes:req.body.notes
    });
    Day.write(NewDay,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed To Save!"});
        }
        else{
            res.json({state:true,msg:"Successfully Saved!"});
        }
    });
});


Router.get("/read",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    Day.getdaysbyuserid(req.user._id,(err,days)=>{
        if(err) throw err;
        res.json({state:true,day:days});
    });
});

Router.post("/deleteday",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const dayId=req.body.dayId;
    Day.deleteday(dayId,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Delete!"});
      }
      else{
        res.json({state:true,msg:"Successfully Deleted!"});
      }
    });
});

module.exports=Router;