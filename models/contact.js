const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;


const Contact=new Schema({
    userId:{type:String,required:true},
    fullName:{type:String,required:true},
    contactNo:{type:String,required:false}
});


const Contacts=module.exports=Mongoose.model("contacts",Contact);


module.exports.createcontact=function(contact,callback){
    contact.save(callback);
};


module.exports.getcontactsbyuserid=function(userid,callback){
    const query={userId:userid};
    Contacts.find(query,callback);
};

module.exports.deletecontact=function(contactId,callback){
    const query1={_id:contactId};
    Contacts.deleteOne(query1,callback);
};