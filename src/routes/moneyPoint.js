const express = require("express");
const router = express.Router();

const MoneyPointController = require("../controllers/moneyPoint");


router.route("/userid/:id").get(MoneyPointController.getByUserId);



module.exports = router;