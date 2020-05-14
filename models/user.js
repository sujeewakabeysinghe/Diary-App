const Mongoose=require("mongoose");
const Bcrypt=require("bcryptjs");
const Schema=Mongoose.Schema;


const User=new Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    hasMemo:{type:Boolean,required:true}
});


const Users=module.exports=Mongoose.model("users",User);


module.exports.registeruser=function(user,callback){
    Bcrypt.genSalt(10,(err,salt)=>{
        Bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) throw err;
            user.password=hash;
            user.hasMemo=false;
            user.save(callback);
        });
    });
};


module.exports.getuserbyemail=function(email,callback){
    const query={email:email};
    //user.deleteOne(query,callback);
    Users.findOne(query,callback);
};


module.exports.checkpassword=function(password,hash,callback){
    Bcrypt.compare(password,hash,(err,res)=>{
        if(err) throw err;
        if(res){
            callback(null,res);
        }
        else{
            callback(null,res);
        }
    });
};


module.exports.getuserbyid=function(id,callback){
    Users.findById(id,callback);
};

module.exports.editprofile=function(id,userName,callback){
    const query1={_id:id};
    const query2={userName:userName};
    Users.findOneAndUpdate(query1,query2,callback);
};

module.exports.edithasmemo=function(id,hasMemo,callback){
    const query1={_id:id};
    const query2={hasMemo:hasMemo};
    Users.findOneAndUpdate(query1,query2,callback);
};

module.exports.editpassword=function(id,newPassword,callback){
    Bcrypt.genSalt(10,(err,salt)=>{
        Bcrypt.hash(newPassword,salt,(err,hash)=>{
            if(err) throw err;
            const password=hash;
            const query1={_id:id};
            const query2={password:password};
            Users.findOneAndUpdate(query1,query2,callback);
        });
    });
};