const db= require("../../models")

const tags = {
  // create new tag
  create: function(req, res) {
    if (req.body.name) {
      // create tag with given parent id and
      // if parent id is not given then set to null
      db.Tags
        .create({
          name: req.body.name,
          parentId: req.body.parentId || null,
        })
        .then((tag) => res.sendStatus(200))
        .catch(err => {
          console.log("adminTagController: ", err);
          res.sendStatus(403);
        });
    } else {
      console.log("adminTagController: Tag name is not provided.");
      res.sendStatus(403);
    }
  }
};

module.exports = tags;