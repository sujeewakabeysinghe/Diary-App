const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Contact=new Schema({
    userId:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    company:{type:String,required:false},
    mobileNo:{type:String,required:false},
    landPhoneNo:{type:String,required:false},
    officeNo:{type:String,required:false},
    email:{type:String,required:false},
    website:{type:String,required:false},
    address:{type:String,required:false},
    notes:{type:String,required:false}
});


const Contacts=module.exports=Mongoose.model("contacts",Contact);


module.exports.createcontact=function(contact,callback){
    contact.save(callback);
};


module.exports.getcontactsbyuserid=function(userid,callback){
    const query={userId:userid};
    Contacts.find(query,callback);
};