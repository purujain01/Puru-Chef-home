const router = require("express").Router();
const adminAuth = require("./adminAuth");
const order = require("./order")
const user = require("./user");

router.use("/", adminAuth);
router.use("/", order);
router.use("/",user)

module.exports = router;
