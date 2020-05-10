const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Memo=new Schema({
    userId:{type:String,required:true},
    mobileNoM:{type:String,required:false},
    landPhoneNoM:{type:String,required:false},
    officeNoM:{type:String,required:false},
    addressM:{type:String,required:false},
    officeAddressM:{type:String,required:false},
    bloodGroupM:{type:String,required:false},
    heightM:{type:String,required:false},
    weightM:{type:String,required:false},
    idNoM:{type:String,required:false},
    licenceNoM:{type:String,required:false},
    bankAccountNoM:{type:String,required:false},
    passportNoM:{type:String,required:false},
    notesM:{type:String,required:false}
});


const Memos=module.exports=Mongoose.model("memos",Memo);


module.exports.creatememo=function(memo,callback){
    memo.save(callback);
};

module.exports.getmemobyuserid=function(userid,callback){
    const query={userId:userid};
    Memos.find(query,callback);
};

module.exports.editmemoMobileNo=function(memoId,mobileNoM,callback){
    const query1={_id:memoId};
    const query2={mobileNoM:mobileNoM};
    Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemolandPhoneNo=function(memoId,landPhoneNoM,callback){
    const query1={_id:memoId};
    const query2={landPhoneNoM:landPhoneNoM};
    Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoofficeNo=function(memoId,officeNoM,callback){
    const query1={_id:memoId};
    const query2={officeNoM:officeNoM};
    Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoaddress=function(memoId,addressM,callback){
    const query1={_id:memoId};
    const query2={addressM:addressM};
    Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoofficeaddress=function(memoId,officeAddressM,callback){
  const query1={_id:memoId};
  const query2={officeAddressM:officeAddressM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemobloodgroup=function(memoId,bloodGroupM,callback){
  const query1={_id:memoId};
  const query2={bloodGroupM:bloodGroupM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoheight=function(memoId,heightM,callback){
  const query1={_id:memoId};
  const query2={heightM:heightM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoweight=function(memoId,weightM,callback){
  const query1={_id:memoId};
  const query2={weightM:weightM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemoid=function(memoId,idNoM,callback){
  const query1={_id:memoId};
  const query2={idNoM:idNoM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemolicence=function(memoId,licenceNoM,callback){
  const query1={_id:memoId};
  const query2={licenceNoM:licenceNoM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemobankaccount=function(memoId,bankAccountNoM,callback){
  const query1={_id:memoId};
  const query2={bankAccountNoM:bankAccountNoM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemopassport=function(memoId,passportNoM,callback){
  const query1={_id:memoId};
  const query2={passportNoM:passportNoM};
  Memos.findOneAndUpdate(query1,query2,callback);
};

module.exports.editmemonotes=function(memoId,notesM,callback){
  const query1={_id:memoId};
  const query2={notesM:notesM};
  Memos.findOneAndUpdate(query1,query2,callback);
};