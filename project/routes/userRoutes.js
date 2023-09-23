const express = require("express");
const router = express.Router();

const { register } = require("../controllers/register");
const { login } = require("../controllers/login");
const { adde_details } = require("../controllers/details");

router.route("/signup").post(register);
router.route("/login").post(login);
router.route("/details").post(adde_details);

module.exports = router;
