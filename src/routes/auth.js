const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");

router.post("/", authController.authorization);

module.exports = router;