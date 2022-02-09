const express = require("express");
const { index, create, update } = require("../controllers/Projects");
const authenticate = require("../middleware/authenticate");
const validate = require("../middleware/validate");
const schemas = require("../validations/Projects");
const router = express.Router();

router.route("/").get(authenticate, index);
router.route("/").post(authenticate, validate(schemas.createValidation), create);
router.route("/:id").patch(authenticate, validate(schemas.updateValidation), update);

module.exports = router;
