const { userService } = require("../services");
const jwt = require("jsonwebtoken")
const { SERVER_SECRET } = require("../middlewares/authMdw");

// controlador para obtener token
const authorization = async (req, res) => {
    const { user, password } = req.body;
    const userFound = await userService.validateUser(user, password);
    if (userFound) {
        const token = jwt.sign({ user, id: userFound.id, role: userFound.role }, SERVER_SECRET)
        return res.json({ token })
    }
    res.status(401).json({ error: "invalid user" });
}

module.exports = { authorization }