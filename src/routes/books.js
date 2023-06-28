const express = require("express");
const router = express.Router();
const {bookController} = require("../controllers")

router.get("/:bookId", bookController.getBookController)

router.put("/:bookId", bookController.putBookController)

module.exports = router;