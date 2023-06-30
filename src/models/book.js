const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db-config");


const Book = sequelize.define("Books",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isbn:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {paranoid: true})

module.exports= Book