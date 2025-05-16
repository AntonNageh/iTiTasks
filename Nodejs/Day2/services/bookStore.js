import { readFile, writeFile } from '../utils/fileUtils.js';

process.loadEnvFile();

let books = [];

const loadBooks = () => {
    books = readFile(process.env.FILEPATH);
};

const getAllBooks = () => {
    return books;
};
const getBookbyId = (id) => {
    return books.find((book) => book.id === id);
}
const deleteBook = (id) => {
    if (!id) {
        throw new Error('id is required');
    }
    if (!books.some((book) => book.id === id)) {
        throw new Error('Book not found');
    }
    books = books.filter((book) => book.id !== id);
    writeFile(books, process.env.FILEPATH);
};

const updateBook = (newBookData) => {
    const book = books.find((book) => book.id === newBookData.id);
    if (book) {
        book.title = newBookData.title;
        writeFile(books, process.env.FILEPATH);
    } else {
        throw new Error('Book not found');
    }
};

const createBook = (book) => {
    if (books.some((b) => b.id === book.id)) {
        throw new Error('Book already exists');
    }
    books.push(book);
    writeFile(books, process.env.FILEPATH);
};

// Load books initially
loadBooks();

export {
    getAllBooks,
    createBook,
    deleteBook,
    updateBook,
    getBookbyId
};
