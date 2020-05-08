const Express=require("express");
const Path=require("path");
const Mongoose=require("mongoose");
const Config=require("./config/database");
const BodyParser=require("body-parser");
const Passport=require("passport");
const User=require("./routes/user");
const Contact=require("./routes/contact");
const Day=require("./routes/day");
const Memo=require("./routes/memo");
const PassportJwt=require("./config/passportjwt")(Passport);
const cors=require("cors");


const App=Express();
const connection=Mongoose.connect(Config.database,{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false});
const port=3000;


App.use(BodyParser.json());
App.use(Passport.initialize());
App.use(Passport.session());
App.use("/user",User);
App.use("/contact",Contact);
App.use("/day",Day);
App.use("/memo",Memo);
App.use(Express.static(Path.join(__dirname,"public")));
App.use(cors());


if(connection){
    console.log("DB Works!");
}
else{
    console.log("DB does not Work!");
}


App.listen(port,()=>{
    console.log("Port Works!");
});


App.get("/",(req,res)=>{
    res.send("Diary!")
});