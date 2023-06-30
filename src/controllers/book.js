const { bookService } = require("../services");


const getBook = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({
                action: "GetBook",
                error : "Book not found"
            });            
        }else{
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({
            action: "GetBook",
            error : error.message
        });
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);        
    } catch (error) {
        res.status(500).json({
            action: "GetAllBook",
            error : error.message
        });
    }
}

const createBook = async (req,res)=>{       
    try {
        const newBook = await bookService.createBook(req.body, req.params.libraryId);
        if (!newBook) {
            res.status(404).json({
                action: "CreateBook",
                error : "Library not found"
            })
        }else{
            res.json(newBook)
        }
    } catch (error) {
        res.status(500).json({
            action: "CreateBook",
            error : error.message
        })
    }
} 

const editBook = async (req, res)=>{
    try {
        const editedBook = await bookService.editBook(req.params.bookId, req.body)
        if (!editedBook) {
            res.status(404).json({
                action: "EditBook",
                error : "Book not found"
            });            
        }else{
            res.json(editedBook);
        }
    } catch (error) {
        res.status(500).json({
            action: "EditBook",
            error : error.message
        })
    }
}

const deleteBook = async (req,res)=>{
    try {
        const deletedBook = await bookService.deleteBook(req.params.bookId)
        res.json(deletedBook)
    } catch (error) {
        res.status(500).json({
            action: "DeleteBook",
            error : error.message
        })
    }
} 

module.exports = {getBook, getAllBooks, createBook, editBook, deleteBook}