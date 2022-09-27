const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate"); // validate middleware
const schemas = require("../validations/product"); // validations rules
const idChecker = require("../middlewares/idChecker"); // validate id

const productController = require("../controllers/product");


router.route("/").get(productController.getAll);
router.route("/getbycategoryid/:id").get(productController.getByCategoryId);
router.route("/:id").get(idChecker(), productController.getById);
router.route("/").post(validate(schemas.createValidation), productController.create);
router.route("/:id").put(idChecker(), validate(schemas.updateValidation), productController.update);
router.route("/:id").delete(idChecker(), productController.delete);


module.exports = router;