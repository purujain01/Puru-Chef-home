const db = require("../models");
require("dotenv").config();

const order = {
  findAll: function (req, res) {
    // // set limit to 10 if not provided
    let negate = ["null", "both", "all", "undefined", undefined, null, ""];

    let limit = Number(req.query.limit) || 10;

    let skip = req.query.page > 1 ? Number((req.query.page - 1) * limit) : 0;

    let sort = ["updatedAt", -1];

    let query = { status: { $ne: "Pending" } };
    // status: req.query.status,
    // slot: req.query.slot,
    if (!negate.includes(req.query.status)) {
      query.status = req.query.status;
    }
    if (!negate.includes(req.query.slot)) {
      query.timeSlotType = req.query.slot;
    }
    if (!negate.includes(req.query.sort)) {
      sort = [req.query.sort, -1];
    }

    // sort orders with updatedAt, set pagination and populate products
    db.Order.find()
      .where(query)
      .skip(skip)
      .populate("products.product")
      .populate("user")
      .sort([sort])
      .then((orders) => {
        // count documents with same query to return total number of orders
        let temp = orders;
        if (!negate.includes(req.query.query)) {
          temp = orders.filter(
            (order) =>
              order.orderNo && String(order.orderNo).startsWith(req.query.query)
          );
          console.log(temp);
        }
        res.json({
          orders: temp.slice(0, limit),
          count: temp.length,
        });
      })
      .catch((err) => {
        console.log(
          "Error in orderController findAll function (reading): ",
          err
        );
        res.status(500).json({
          status: "failure",
          message: "Some Error Occured. Try Again!",
        });
      });
  },
  changeStatus: function (req, res) {
    db.Order.findOneAndUpdate(
      { _id: req.body.orderId },
      { status: req.body.status }
    )
      .then(() => res.status(200).json({ status: "Done" }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          status: "failure",
          message: "Some Error Occured. Try Again!",
        });
      });
  },

  findOne: function (req, res) {
    db.Order.findOne({ _id: req.query.orderId })
      .populate("products.product")
      .populate("user")
      .then((order) => {
        res.json(order);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ status: "Failure", message: "Some error occured" });
      });
  },
};

module.exports = order;
