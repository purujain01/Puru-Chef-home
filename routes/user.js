const router = require("express").Router();
const userController = require("../controllers/userController");

const auth = require("../middleware/auth.js");

const sanitizeHtml = require("../middleware/sanitizeHtml.js");

router.route("/getUserCount").get(userController.getCount);
router.route("/all").get(userController.findAllUsers);


module.exports = router;