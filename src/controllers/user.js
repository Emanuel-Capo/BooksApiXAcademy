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

const createTicket = async (req, res) =>{
    try {
        const newTicket = await userService.createTicket(req.params.userId, req.body);
        res.json(newTicket)
    } catch (error) {
        res.status(500).json({
            action: "CreateTicket",
            error : error.message
        })
    }
}


module.exports = {createUser, getUser, createTicket}