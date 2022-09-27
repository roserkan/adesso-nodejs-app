const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/userDetail"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const userDetailController = require("../controllers/userDetail");


router.route("/").get(userDetailController.getAll);
router.route("/getbyuserid/:id").get(userDetailController.getByUserId);
router.route("/:id").get(idChecker(), userDetailController.getById);
router.route("/").post(validate(schemas.createValidation), userDetailController.create);
router.route("/:id").put(idChecker(), validate(schemas.updateValidation), userDetailController.update);
router.route("/:id").delete(idChecker(), userDetailController.delete);

module.exports = router;