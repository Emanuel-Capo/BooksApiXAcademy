const express = require("express");

const {bookRouter, userRouter, authRouter} = require("./routes");
const loggingMdw = require("./middlewares/logging");
const {initializeDB} = require("./config/db-config");

PORT = 8090;
const app = express();

// Aplication middleware
app.use(express.json());  // si viene un json, lo parsea

app.use(loggingMdw)

app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/login", authRouter);

const errorHandler = (err, req, res, next)=>{

}

app.listen(PORT, async ()=>{
    await initializeDB();
    console.log(`server running in port ${PORT}`);
});

