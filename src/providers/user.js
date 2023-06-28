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

const createTicket = async (userId, ticket)=>{
    try {
       const newTicket = await Ticket.create({...ticket, UserId:  userId});
       return newTicket;
    } catch (error) {
        console.log("Error when creating tocket ", error);
        throw error
    }
};


module.exports = {createUser, getUser, createTicket};