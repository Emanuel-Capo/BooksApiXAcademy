const loggingMdw = (req, res, next)=>{
    console.log(`call resource ${req.url} with method ${req.method}`);
    next();
}

module.exports = loggingMdw;