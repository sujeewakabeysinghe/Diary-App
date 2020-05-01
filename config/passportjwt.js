const JwtStrategy=require("passport-jwt").Strategy;
const ExtractJwt=require("passport-jwt").ExtractJwt;
const Config=require("../config/database");
const User=require("../models/user");


const Opts={};
Opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
Opts.secretOrKey=Config.secret;


module.exports=function(passport){
    passport.use(new JwtStrategy(Opts,(jwt_payload,done)=>{
        User.getuserbyid(jwt_payload._id,(err,user)=>{
            if(err){
                return done(err,false);
            }
            if(user){
                return done(null,user);
            }
            else{
                return done(null,false);
            }
        });
    }));
}