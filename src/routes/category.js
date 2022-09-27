const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/category"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const CategoryController = require("../controllers/category");


router.route("/").get(CategoryController.getAll);
router.route("/:id").get(idChecker(), CategoryController.getById);
router.route("/").post(validate(schemas.createValidation), CategoryController.create);
router.route("/:id").put(idChecker(), validate(schemas.updateValidation), CategoryController.update);
router.route("/:id").delete(idChecker(), CategoryController.delete);


module.exports = router;