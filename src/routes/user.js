const express = require("express");
const router = express.Router();
const {userController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

router.post("/", userController.createUser);
router.get("/:userId",jwtValidMdw, userController.getUser);
router.post("/:userId/ticket", userController.createTicket);

module.exports = router;