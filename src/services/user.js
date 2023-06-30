const {userProvider} = require("../providers")

const createUser = async (user) =>{
    const newUser = await userProvider.createUser(user);
    return newUser;
};

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    return user;
};

const getAllUsers = async ()=>{
    const allUsers = await userProvider.getAllUsers();
    return allUsers;
}

const editUser = async (userId, user)=>{
    const editedUser = await userProvider.editUser(userId, user);
    return editedUser
}

const deleteUser = async (userId)=>{
    const deletedUser = await userProvider.deleteUser(userId);
    return deletedUser;
}

const validateUser = async (user, password) => {
    const userFound = await userProvider.validateUser({ user, password });
    return userFound;
  };

module.exports = {createUser, getUser, getAllUsers, editUser, deleteUser, validateUser}