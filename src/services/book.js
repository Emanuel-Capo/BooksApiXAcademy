const { bookProvider } = require("../providers");


const getBook = async (bookId)=>{
    const bookFound = await bookProvider.getBook(bookId);
    return bookFound;
}

const getAllBooks = async ()=>{
    const allBooks = await bookProvider.getAllBooks();
    return allBooks;
}

const createBook = async (book)=>{
    const newBook = await bookProvider.createBook(book);
    return newBook
}

const editBook = async (bookId, book)=>{
    const editedBook = await bookProvider.editBook(bookId, book);
    return editedBook
}

const deleteBook = async (bookId)=>{
    const deletedBook = await bookProvider.deleteBook(bookId);
    return deletedBook;
}


module.exports = {getBook, getAllBooks, createBook, editBook, deleteBook}
