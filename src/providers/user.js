const { User } = require("../models");

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    console.log("Error when fetching user ", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log("Error when fetching all users ", error);
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.log("Error when creating user ", error);
    throw error;
  }
};

// Se puede editar enviando de todos hasta ningún campo
const editUser = async (userId, user) => {
  const { name, lastname, email, password } = user;
  try {
      const userFound = await getUser(userId);
      if (userFound) {
          if (name) userFound.name = name;
          if (lastname) userFound.lastname = lastname;
          if (email) userFound.email = email;
          if (password) userFound.password = password;

          try {
              await userFound.save();
              return userFound;
          } catch (error) {
              console.log("Error when editing user ", error);
              throw error;
          }
      }
  } catch (error) {
      console.log("Error when fetching user ", error);
      throw error;
  }
};

// Devuelve el usuario borrado con el campo deletedAt != null
const deleteUser = async (userId) => {
  try {
      await User.destroy({ where: { id: userId } });
      const user = await User.findByPk(userId, { paranoid: false });
      return user;
  } catch (error) {
      console.log("Error when deleting user ", error);
      throw error;
  }
};

// Validación para autenticar al usuario
const validateUser = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        email: options.user,
        password: options.password,
      },
    });
    if (user.length !== 0) {
      return user[0];
    }
    return false;
  } catch (err) {
    console.error("Error when validating User", err);
    return false;
  }
};

module.exports = { createUser, getUser, getAllUsers, editUser, deleteUser, validateUser };
