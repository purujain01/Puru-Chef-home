const db = require("../models");
const passport = require("passport");
const TwitterStrategy = require('passport-twitter').Strategy;
const twitterKeys=require("./passportKeys").twitterKeys


const userStrategy =new TwitterStrategy({
    consumerKey: twitterKeys.consumerKey ,
    consumerSecret:twitterKeys.consumerSecret,
    userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
    includeEmail: true,
    callbackURL:twitterKeys.callbackURL
  },
  async function(accessToken, refreshToken, profile, done) {
  console.log(profile,"profile")
	 try {
  	   const existingUser = await db.User.findOne({twitterId:profile.id})
       if(!existingUser){
         const newUser = new db.User({
            username: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
            twitterId: profile.id
        	});
        await newUser.save()
        done(null,newUser);
      }
      else{
      	done(null,existingUser);
      }
    }
    catch(error){
    	done(error,false);
    }
    
  }
);

const adminStrategy =new TwitterStrategy({
    consumerKey: twitterKeys.consumerKey ,
    consumerSecret:twitterKeys.consumerSecret,
    userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
    includeEmail: true,
    callbackURL:twitterKeys.callbackURL
  },
  async function(accessToken, refreshToken, profile, done) {
  console.log(profile,"profile")
   try {
       const existingAdmin = await db.Admin.findOne({twitterId:profile.id})
       if(!existingAdmin){
         const newAdmin = new db.Admin({
            username: profile.displayName,
            avatar: profile.photos[0].value,
            email: profile.emails[0].value,
            twitterId: profile.id
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