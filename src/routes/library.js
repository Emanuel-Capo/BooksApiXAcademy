const express = require("express");
const router = express.Router();
const {libraryController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

router.get("/:libraryId", libraryController.getLibrary)
router.get("/", libraryController.getAllLibraries)
router.post("/", jwtValidMdw, libraryController.createLibrary)
router.put("/:libraryId", jwtValidMdw, libraryController.editLibrary)
router.delete("/:libraryId", jwtValidMdw, libraryController.deleteLibrary)


module.exports = router;