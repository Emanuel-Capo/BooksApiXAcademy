const getBookController = (req, res)=>{
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, name: "LOTR"})
}

const putBookController = (req, res)=>{
    console.log(`Book found with id ${req.params.bookId}`);
    res.json({id: req.params.bookId, ...req.body})
}

module.exports = {getBookController, putBookController}