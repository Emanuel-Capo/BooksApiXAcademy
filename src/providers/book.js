const {Book} = require("../models");


const getBook = async (bookId)=>{
    try {
        // Para ver libro con borrado lógico
        // const book = await Book.findByPk(bookId, {paranoid: false});
        const book = await Book.findByPk(bookId);
        return book;
     } catch (error) {
        console.log("Error when fetching book ", error);
        throw error
     }
}

const getAllBooks = async ()=>{
    try {
        // Para ver libros con borrado lógico
        // const books = await Book.findAll({paranoid:false});
        const books = await Book.findAll();
        return books;
     } catch (error) {
        console.log("Error when fetching all books ", error);
        throw error
     }
}

const createBook = async (book)=>{
    try {
        const newBook = await Book.create(book);
        return newBook;
     } catch (error) {
        console.log("Error when creating book ", error);
        throw error
     }
}

const editBook = async (bookId, book)=>{
    const { isbn, title, author, year, library } = book;
    try{
        const bookFound = await getBook(bookId)
        if (bookFound) {
            if (isbn) bookFound.isbn = isbn;
            if (title) bookFound.title = title;
            if (author) bookFound.author = author;
            if (year) bookFound.year = year;
            if (library) bookFound.library = library;

            try {
                await bookFound.save();
                return bookFound;                
            } catch (error) {
                console.log("Error when editing book ", error);
                throw error
            }
        }
    } catch (error) {
        console.log("Error when fetching book ", error);
        throw error
    }
}

const deleteBook = async (bookId)=>{
    try {
        await Book.destroy({where:{id:bookId}});
        const book = await Book.findByPk(bookId, {paranoid:false})
        return book;
    } catch (error) {
        console.log("Error when deleting book ", error);
        throw error
    }
}


module.exports = {getBook, getAllBooks, createBook, editBook, deleteBook}
