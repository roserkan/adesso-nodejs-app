const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/category"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const CategoryPointRateController = require("../controllers/categoryPointRate");


router.route("/categoryid/:id").get(idChecker(), CategoryPointRateController.getRateByCategoryId);
router.route("/").put(CategoryPointRateController.update);



module.exports = router;