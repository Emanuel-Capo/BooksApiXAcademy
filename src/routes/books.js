const express = require("express");
const router = express.Router();
const {bookController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

router.get("/:bookId", jwtValidMdw, bookController.getBookController)

router.put("/:bookId", bookController.putBookController)

module.exports = router;