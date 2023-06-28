const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

const initializeDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Conexión a la BDD establecida");
        await sequelize.sync({force: false})
    } catch (error) {
        console.log("Hubo un error al realizar la conexión con la BDD");
    }
}

module.exports = {sequelize, initializeDB}