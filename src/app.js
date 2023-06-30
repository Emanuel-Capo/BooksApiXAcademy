const express = require("express");

const {bookRouter, userRouter, libraryRouter} = require("./routes");
const loggingMdw = require("./middlewares/logging");
const {initializeDB} = require("./config/db-config");
const { defaultAdmin } = require("./helpers/createUsersDefault");

PORT = 8090;
const app = express();

// Aplication middleware
app.use(express.json());  // si viene un json, lo parsea

app.use(loggingMdw) // indica metodo y url

// Rutas de la api
app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/library", libraryRouter);

// Levantar el server agregar el usuario admin a la BDD si no exite
app.listen(PORT, async ()=>{
    await initializeDB();    
    await defaultAdmin();
    console.log(`server running in port ${PORT}`);
});


// Comunicación general:
// app <-> routes <-> controllers <-> services <-> providers <-> models
