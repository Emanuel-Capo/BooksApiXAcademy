const {User, Ticket} = require("../models");

const createUser = async (user)=>{
    try {
       const newUser = await User.create(user);
       return newUser;
    } catch (error) {
        console.log("Error when creating user ", error);
        throw error
    }
};

const getUser = async (userId)=>{
    try {
       const user = await User.findByPk(userId, {include: {all: true}});
       return user;
    } catch (error) {
        console.log("Error when fetching user ", error);
        throw error
    }
};

const getUserByCriteria = async (options) => {
    try {
      const user = await User.findAll({
        where: {
          [Op.or]: [
            { firstName: options.firstName },
            { lastName: options.lastName },
          ],
        },
      });
      return user;
    } catch (err) {
      console.error("Error when fetching User", err);
      throw err;
    }
  };
  
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

const createTicket = async (userId, ticket)=>{
    try {
       const newTicket = await Ticket.create({...ticket, UserId:  userId});
       return newTicket;
    } catch (error) {
        console.log("Error when creating tocket ", error);
        throw error
    }
};


module.exports = {createUser, getUser, createTicket, getUserByCriteria, validateUser};