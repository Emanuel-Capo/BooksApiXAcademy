const express = require("express");
const router = express.Router();
const {userController, authController} = require("../controllers");
const { userIsAdminMdw } = require("../middlewares/authMdw");

router.post("/", userController.createUser);
router.get("/:userId", userController.getUser);
router.get("/", userController.getAllUsers);
router.put("/:userId", userController.editUser);
router.delete("/:userId", userIsAdminMdw, userController.deleteUser);
router.post("/login", authController.authorization);

module.exports = router;