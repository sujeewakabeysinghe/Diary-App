const Express=require("express");
const Memo=require("../models/memo");
const Router=Express.Router();
const Passport=require("passport");


Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


Router.post("/creatememo",(req,res)=>{
    const NewMemo=new Memo({
        userId:req.body.userId,
        mobileNoM:req.body.mobileNoM,
        landPhoneNoM:req.body.landPhoneNoM,
        officeNoM:req.body.officeNoM,
        addressM:req.body.addressM,
        officeAddressM:req.body.officeAddressM,
        bloodGroupM:req.body.bloodGroupM,
        heightM:req.body.heightM,
        weightM:req.body.weightM,
        idNoM:req.body.idNoM,
        licenceNoM:req.body.licenceNoM,
        bankAccountNoM:req.body.bankAccountNoM,
        passportNoM:req.body.passportNoM,
        notesM:req.body.notesM
    });
    Memo.creatememo(NewMemo,(err,user)=>{
        if(err){
            res.json({state:false,msg:"Failed To Create!"});
        }
        else{
            res.json({state:true,msg:"Successfully Created!"});
        }
    });
});


Router.get("/readmemo",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    Memo.getmemobyuserid(req.user._id,(err,memos)=>{
        if(err) throw err;
        res.json({state:true,memo:memos});
    });
});

Router.post("/editmemoMobileNo",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const memoId=req.body.memoId;
    const mobileNoM=req.body.mobileNoM;
    Memo.editmemoMobileNo(memoId,mobileNoM,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Update!"});
      }
      else{
        res.json({state:true,msg:"Successfully Updated!"});
      }
    });
});

Router.post("/editmemolandPhoneNo",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const memoId=req.body.memoId;
    const landPhoneNoM=req.body.landPhoneNoM;
    console.log(landPhoneNoM);
    Memo.editmemolandPhoneNo(memoId,landPhoneNoM,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Update!"});
      }
      else{
        res.json({state:true,msg:"Successfully Updated!"});
      }
    });
});

Router.post("/editmemoofficeNo",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const memoId=req.body.memoId;
    const officeNoM=req.body.officeNoM;
    Memo.editmemoofficeNo(memoId,officeNoM,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Update!"});
      }
      else{
        res.json({state:true,msg:"Successfully Updated!"});
      }
    });
});

Router.post("/editmemoaddress",Passport.authenticate('jwt',{session:false}),(req,res)=>{
    const memoId=req.body.memoId;
    const addressM=req.body.addressM;
    Memo.editmemoaddress(memoId,addressM,(err,user)=>{
      if(err){
        res.json({state:false,msg:"Failed To Update!"});
      }
      else{
        res.json({state:true,msg:"Successfully Updated!"});
      }
    });
});

module.exports=Router;