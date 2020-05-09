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