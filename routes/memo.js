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

Router.post("/editmemoofficeaddress",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const officeAddressM=req.body.officeAddressM;
  Memo.editmemoofficeaddress(memoId,officeAddressM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemobloodgroup",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const bloodGroupM=req.body.bloodGroupM;
  Memo.editmemobloodgroup(memoId,bloodGroupM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemoheight",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const heightM=req.body.heightM;
  Memo.editmemoheight(memoId,heightM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemoweight",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const weightM=req.body.weightM;
  Memo.editmemoweight(memoId,weightM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemoid",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const idNoM=req.body.idNoM;
  Memo.editmemoid(memoId,idNoM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemolicence",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const licenceNoM=req.body.licenceNoM;
  Memo.editmemolicence(memoId,licenceNoM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemobankaccount",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const bankAccountNoM=req.body.bankAccountNoM;
  Memo.editmemobankaccount(memoId,bankAccountNoM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemopassport",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const passportNoM=req.body.passportNoM;
  Memo.editmemopassport(memoId,passportNoM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

Router.post("/editmemonotes",Passport.authenticate('jwt',{session:false}),(req,res)=>{
  const memoId=req.body.memoId;
  const notesM=req.body.notesM;
  Memo.editmemonotes(memoId,notesM,(err,user)=>{
    if(err){
      res.json({state:false,msg:"Failed To Update!"});
    }
    else{
      res.json({state:true,msg:"Successfully Updated!"});
    }
  });
});

module.exports=Router;