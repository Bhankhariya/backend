const express = require("express");

const router = express.Router();
const ocationalForm = require("../controller/ocational-controller");


router.route("/ocational").post(ocationalForm);

module.exports = router;