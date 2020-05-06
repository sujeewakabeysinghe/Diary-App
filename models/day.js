const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Day=new Schema({
    userId:{type:String,required:true},
    date:{type:String,required:true},
    notes:{type:String,required:true}
});


const Days=module.exports=Mongoose.model("days",Day);


module.exports.write=function(day,callback){
    day.save(callback);
};


module.exports.getdaysbyuserid=function(userid,callback){
    const query={userId:userid};
    Days.find(query,callback);
};