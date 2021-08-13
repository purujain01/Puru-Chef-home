const router = require("express").Router();
const orderController = require("../controllers/orderController");
const auth = require("../middleware/auth.js");
const sanitizeHtml = require("../middleware/sanitizeHtml.js");

router.route("/orders").get(orderController.findAll);
router.route("/changeStatus").put(orderController.changeStatus);
router.route("/order").get(orderController.findOne);

module.exports = router;

