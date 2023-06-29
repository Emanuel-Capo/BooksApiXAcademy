const {userProvider} = require("../providers")

const createUser = async (user) =>{
    const newUser = await userProvider.createUser(user);
    return newUser;
};

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    if (user) {
        console.log(user.name);      
    }
    return user;
};

const validateUser = async (user, password) => {
    const userFound = await userProvider.validateUser({ user, password });
    return userFound;
  };

const createTicket = async (userId, ticket) =>{
    const user = await userProvider.getUser(userId);
    if (user) {     
        const newTicket = await userProvider.createTicket(userId, ticket);
        return newTicket;
    };
    return null;
};

module.exports = {createUser, getUser, createTicket, validateUser}