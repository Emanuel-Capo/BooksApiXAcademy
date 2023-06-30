const {userService} = require("../services")


const createUser = async (req, res) =>{
    try {
        const newUser = await userService.createUser(req.body);
        res.json(newUser)
    } catch (error) {
        res.status(500).json({
            action: "CreateUser",
            error : error.message
        })
    }
}

const getUser = async (req, res)=>{
    try {
        const user = await userService.getUser(req.params.userId);
        if (!user) {
            res.status(404).json({
                action: "GetUser",
                error : "User not found"
            });            
        }else{
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({
            action: "GetUser",
            error : error.message
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);        
    } catch (error) {
        res.status(500).json({
            action: "GetAllUsers",
            error : error.message
        });
    }
}

const editUser = async (req, res)=>{
    try {
        const editedUser = await userService.editUser(req.params.userId, req.body)
        if (!editedUser) {
            res.status(404).json({
                action: "EditUser",
                error : "User not found"
            });            
        }else{
            res.json(editedUser);
        }
    } catch (error) {
        res.status(500).json({
            action: "EditUser",
            error : error.message
        })
    }
}

const deleteUser = async (req,res)=>{
    try {
        const deletedUser = await userService.deleteUser(req.params.userId)
        res.json(deletedUser)
    } catch (error) {
        res.status(500).json({
            action: "DeleteUser",
            error : error.message
        })
    }
} 

module.exports = {createUser, getUser, getAllUsers, editUser, deleteUser}