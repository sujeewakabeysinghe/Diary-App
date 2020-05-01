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
    const ts=Date.now();
    const obj=new Date(ts);
    const date=obj.getDate();
    const month=obj.getMonth();
    const year=obj.getFullYear();
    const NewDay=new Day({
        userId:req.body.userId,
        date:date,
        month:month,
        year:year,
        notes:req.body.notes
    });
    Day.write(NewDay,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed to Save!"});
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


module.exports=Router;