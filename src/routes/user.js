const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/user"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const userController = require("../controllers/user");


router.route("/").get(userController.getAll);
router.route("/:id").get(idChecker(), userController.getById);
router.route("/").post(validate(schemas.createValidation), userController.create);
router.route("/:id").put(idChecker(), validate(schemas.updateValidation), userController.update);
router.route("/:id").delete(idChecker(), userController.delete);
router.route("/login").post(userController.login);

module.exports = router;