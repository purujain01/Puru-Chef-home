const db = require("../models");
const LocalStrategy = require("passport-local").Strategy;

const userStrategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    console.log(email);
    console.log(password);
    db.User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("incorrect username");
        return done(null, false, { message: "Incorrect Email" });
      }
      if (!user.checkPassword(password)) {
        console.log("incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
      // console.log("Who knows?");
      return done(null, user);
    });
  }
);

const adminStrategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    console.log(email);
    console.log(password);
    db.Admin.findOne({ email: email }, (err, admin) => {
      if (err) {
        return done(err);
      }
      if (!admin) {
        console.log("incorrect Admin name");
        return done(null, false, { message: "Incorrect Email" });
      }
      if (!admin.checkPassword(password)) {
        console.log("incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
      // console.log("Who knows?");
      return done(null, admin);
    });
  }
);

strategy={userStrategy,adminStrategy};

module.exports = strategy;
