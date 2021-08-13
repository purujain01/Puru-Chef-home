const db = require("../models");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const googleKeys=require("./passportKeys").googleKeys

const userStrategy =new GoogleStrategy({
    clientID:googleKeys.clientID ,
    clientSecret:googleKeys.clientSecret,
    callbackURL:googleKeys.callbackURL,
  },
  // https://www.googleapis.com/admin/directory/v1/users/userKey
  async function(accessToken, refreshToken, profile,done) {
	 try {
  	   const existingUser = await db.User.findOne({googleId:profile.id});
       const isEmailAvalible=await db.User.findOne({email:profile.emails[0].value})
       if(!existingUser && !isEmailAvalible){
         const newUser = new db.User({
            username: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
            googleId: profile.id,
            mobileNo1:0,
            gender:"prefer not to say"
        	});
        await newUser.save()
        done(null,newUser);
      }
      else if(existingUser){
      	done(null,existingUser);
      }
      else if(isEmailAvalible){
        done(null,isEmailAvalible);
      }
    }
    catch(error){
    	done(error,false);
    }
    
  }
);

const adminStrategy =new GoogleStrategy({
    clientID:googleKeys.clientID ,
    clientSecret:googleKeys.clientSecret,
    callbackURL:googleKeys.callbackURL
  },
  async function(accessToken, refreshToken, profile,done) {
   try {
       const existingAdmin = await db.Admin.findOne({googleId:profile.id})
       if(!existingAdmin){
         const newAdmin = new db.Admin({
            username: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
            googleId: profile.id
          });
        await newAdmin.save()
        done(null,newAdmin);
      }
      else{
        done(null,existingAdmin);
      }
    }
    catch(error){
      done(error,false);
    }
    
  }
);
strategy={userStrategy,adminStrategy};

module.exports = strategy;

// firstName: profile.name.givenName,
// lastName: profile.name.familyName,
// image: profile.photos[0].value,