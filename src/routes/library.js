const express = require("express");
const router = express.Router();
const {libraryController, bookController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

// Obtener librería por id
router.get("/:libraryId", libraryController.getLibrary)

// Obtener todas las librerías
router.get("/", libraryController.getAllLibraries)

// Crear librería. Solo para users autenticados 
router.post("/", jwtValidMdw, libraryController.createLibrary)

// Editar librería enviando el id de la librería por params. Solo para users autenticados 
router.put("/:libraryId", jwtValidMdw, libraryController.editLibrary)

// Borrado lógico de librería enviando el id de la librería por params. Solo para users autenticados 
router.delete("/:libraryId", jwtValidMdw, libraryController.deleteLibrary)

// Crear libro enviando el id de la libreria por params. Solo para users autenticados 
router.post("/:libraryId/book", jwtValidMdw, bookController.createBook)

module.exports = router;