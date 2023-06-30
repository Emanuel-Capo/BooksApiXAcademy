const express = require("express");
const router = express.Router();
const {bookController} = require("../controllers");
const { jwtValidMdw } = require("../middlewares/authMdw");

// Obtener libro por id
router.get("/:bookId", bookController.getBook) 

// Obtener todos los libros
router.get("/", bookController.getAllBooks)

// Crear libro enviando el id de la libreria por params. Solo para users autenticados 
router.post("/:libraryId", jwtValidMdw, bookController.createBook)

// Editar libro enviando el id del libro por params. Solo para users autenticados 
router.put("/:bookId", jwtValidMdw, bookController.editBook)

// Borrado lógico de libro, enviando el id del libro por params. Solo para users autenticados 
router.delete("/:bookId", jwtValidMdw, bookController.deleteBook)


module.exports = router;