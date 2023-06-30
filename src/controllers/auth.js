const { userService } = require("../services");
const jwt = require("jsonwebtoken")
const {SERVER_SECRET} = require("../middlewares/authMdw");

const authorization = async (req, res) =>{
    const {user, password} = req.body;
    if (user == "admin" && password == "admin") {
        const token = jwt.sign({user, role: "Admin"},SERVER_SECRET)
        res.json({token})
    }else{
        const userFound = await userService.validateUser(user, password);
        if (userFound) {
            const token = jwt.sign({user, role: "User"},SERVER_SECRET)
            return res.json({token})
        }
         res.status(401).json({error:"invalid user"});
    }
}

module.exports = {authorization}