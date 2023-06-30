const express = require("express");
const router = express.Router();
const {userController, authController} = require("../controllers");
const { userIsAdminMdw, userIsCorrect } = require("../middlewares/authMdw");

// Obtener user por id
router.get("/:userId", userController.getUser);

// Obtener todos los users
router.get("/", userController.getAllUsers);

// Crear user
router.post("/", userController.createUser);

// Editar user. Sólo es posible editar si sos el mismo usuario
router.put("/:userId", userIsCorrect, userController.editUser);

// Borrado lógico de user. Sólo es posible borrar si sos un usuario con role: Admin
router.delete("/:userId", userIsAdminMdw, userController.deleteUser);

// Ruta para la autenticación (si el user es correcto, devuelve el token)
router.post("/login", authController.authorization);

module.exports = router;