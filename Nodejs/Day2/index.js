
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const upload = multer();
const { getAllBooks, createBook, deleteBook, updateBook, getBookbyId } = require('./services/bookStore');
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(upload.none());


app.get("/books", (req, res) => {
    const books = getAllBooks(); 
    res.json(books);
})
app.get("/books/:bookId", (req, res) => {
    const { bookId } = req.params;
    const books = getAllBooks(); 
    const book = books.find((b) => b.id === parseInt(bookId));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})
app.put("/update/:bookId", (req, res) => {
    const { bookId } = req.params;
    const { title, description, author, coverImg } = req.body;
    const books = getAllBooks(); 
    const book = books.find((book) => book.id === parseInt(bookId));
    if (book) {
        book.title = title;
        book.description = description;
        book.author = author;
        book.coverImg = coverImg;
        updateBook(book);
        res.json({ message: "Book updated successfully" });
        return(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})
app.delete("/delete/:bookId", (req, res) => {
    const { bookId } = req.params;
    const books = getAllBooks(); 
    const book = books.find((b) => b.id === parseInt(bookId));
    if (book) {
        deleteBook(parseInt(bookId));
        res.json({ message: "Book deleted successfully" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})
app.get("/author/:author", (req, res) => {
    const { author } = req.params;
    const books = getAllBooks(); 
    const book = books.filter((book) => book.author.toLowerCase() === author.toLowerCase());
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})
app.post("/create", (req, res) => {
    console.log(req.body)
    const { title, description, author, coverImg } = req.body;
    const books = getAllBooks(); 
    const book = { id: books.length + 1, title, description, author, coverImg };
    createBook(book);
    res.json({ message: "Book created successfully" });
    return book;
})
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
}); 