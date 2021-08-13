const db = require("../models");
require("dotenv").config();

const user = {
  findAllUsers: function (req, res) {
    db.Admin.find()
      .then((all) => {
        console.log(all)
        res.json({
          users: all,
          count: all.length,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send(500).json({
          status: "failure",
          message: "Some Error Occured. Try Again!",
        });
      });
  },
  getCount: function (req, res) {
    db.Admin.countDocuments({}).then((count) => {
      // console.log(count)
          res.json({status:'success',count})
     }).catch((err) => {
          console.log(err)
          res.send(500).json({
             status: "failure",
             message: "Some Error Occured. Try Again!"
       })
     })
 }
};

module.exports = user;
