const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db-config");
const Book = require("./book");


const Library = sequelize.define("Libraries",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Book.belongsTo(Library);
Library.hasMany(Book);

module.exports= Library;