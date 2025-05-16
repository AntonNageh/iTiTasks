// server.js file
import http from 'http';
import { getAllBooks, createBook, updateBook, deleteBook } from './services/bookStore.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/books' && req.method === 'GET') {
        const books = getAllBooks(); // Get the list of books from the bookStore module
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books));
    } else if (req.url === '/create' && req.method === 'POST') {
        handleRequestBody(req, (body) => {
            createBook(JSON.parse(body));
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book created successfully' }));
        });
    } else if (req.url === '/update' && req.method === 'PUT') {
        handleRequestBody(req, (body) => {
            updateBook(JSON.parse(body));
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book updated successfully' }));
        });
    } else if (req.url === '/delete' && req.method === 'DELETE') {
        handleRequestBody(req, (body) => {
            const { id } = JSON.parse(body);
            deleteBook(id);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book deleted successfully' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Utility function to handle request body parsing
function handleRequestBody(req, callback) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString(); // Convert Buffer to string
    });
    req.on('end', () => {
        callback(body);
    });
}
