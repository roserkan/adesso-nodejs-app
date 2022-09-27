const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/role"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const roleController = require("../controllers/role");


router.route("/").get(roleController.getAll);
router.route("/:id").get(idChecker(), roleController.getById);
router.route("/").post(validate(schemas.createValidation), roleController.create);
router.route("/:id").put(idChecker(), validate(schemas.updateValidation), roleController.update);
router.route("/:id").delete(idChecker(), roleController.delete);

module.exports = router;