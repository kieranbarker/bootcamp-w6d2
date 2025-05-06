const express = require("express");
const { Author, Book } = require("./models/index.js");

// Creates an Express application.
const app = express();

// Parses incoming requests with JSON payloads.
app.use(express.json());

// Creates a new author.
app.post("/authors", async function (req, res) {
	const author = await Author.create(req.body);
	res.status(201).send(author); // 201 Created
});

// Gets all authors.
app.get("/authors", async function (req, res) {
	const authors = await Author.findAll();
	res.status(200).send(authors); // 200 OK
});

// Gets an author by ID.
app.get("/authors/:authorId", async function (req, res) {
	const author = await Author.findByPk(req.params.authorId);

	if (author) {
		res.status(200).send(author); // 200 OK
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Updates an author by ID.
app.patch("/authors/:authorId", async function (req, res) {
	let author = await Author.findByPk(req.params.authorId);

	if (author) {
		author = await author.update(req.body);
		res.status(200).send(author); // 200 OK
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Deletes an author by ID.
app.delete("/authors/:authorId", async function (req, res) {
	const author = await Author.findByPk(req.params.authorId);

	if (author) {
		await author.destroy();
		res.status(204).send(); // 204 No Content
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Gets all books by author ID.
app.get("/authors/:authorId/books", async function (req, res) {
	const author = await Author.findByPk(req.params.authorId);

	if (author) {
		const books = await author.getBooks();
		res.status(200).send(books); // 200 OK
	} else {
		res.status(200).send([]); // 200 OK
	}
});

//
// Books
//

// Creates a new book.
app.post("/books", async function (req, res) {
	const book = await Book.create(req.body);
	res.status(201).send(book); // 201 Created
});

// Gets all books.
app.get("/books", async function (req, res) {
	const books = await Book.findAll();
	res.status(200).send(books); // 200 OK
});

// Gets a book by ID.
app.get("/books/:bookId", async function (req, res) {
	const book = await Book.findByPk(req.params.bookId);

	if (book) {
		res.status(200).send(book); // 200 OK
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Updates a book by ID.
app.patch("/books/:bookId", async function (req, res) {
	let book = await Book.findByPk(req.params.bookId);

	if (book) {
		book = await book.update(req.body);
		res.status(200).send(book); // 200 OK
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Deletes a book by ID.
app.delete("/books/:bookId", async function (req, res) {
	const book = await Book.findByPk(req.params.bookId);

	if (book) {
		await book.destroy();
		res.status(204).send(); // 204 No Content
	} else {
		res.status(404).send(); // 404 Not Found
	}
});

// Listens for connections on an arbitrary port.
// The respective ports for HTTP and HTTPS are 80 and 443.
app.listen(3000);
