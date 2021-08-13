const passport = require("passport");
const localStrategy = require("./localStrategy");
const jwtStrategy = require("./jwtStrategy");

const { Admin } = require("../models");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// user object attaches to the request as req.user
passport.deserializeUser((userID, done) => {
  Admin.findById(userID, (err, user) => {
    done(err, user);
  });
});


//startegy for admins
passport.use("admin_local",localStrategy.adminStrategy);
passport.use("admin_jwt",jwtStrategy.adminStrategy);

module.exports = passport;
