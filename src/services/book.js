const { bookProvider, libraryProvider } = require("../providers");


const getBook = async (bookId)=>{
    const bookFound = await bookProvider.getBook(bookId);
    return bookFound;
}

const getAllBooks = async ()=>{
    const allBooks = await bookProvider.getAllBooks();
    return allBooks;
}

const createBook = async (book, libraryId)=>{
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
        const newBook = await bookProvider.createBook(book, libraryId);
        return newBook;        
    }
    return null;
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
