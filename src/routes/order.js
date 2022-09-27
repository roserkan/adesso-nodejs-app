const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order");


router.route("/").post(OrderController.create);


module.exports = router;