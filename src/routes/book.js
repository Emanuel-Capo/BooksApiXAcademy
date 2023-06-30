const express = require("express");
const router = express.Router();
const {bookController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

router.get("/:bookId", bookController.getBook)
router.get("/", bookController.getAllBooks)
router.post("/", jwtValidMdw, bookController.createBook)
router.put("/:bookId", jwtValidMdw, bookController.editBook)
router.delete("/:bookId", jwtValidMdw, bookController.deleteBook)


module.exports = router;