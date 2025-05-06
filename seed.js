const db = require("./db.js");
const { Author, Book } = require("./models/index.js");

async function seed() {
	const authors = [
		{ id: 1, name: "Malorie Blackman", country: "United Kingdom" },
		{ id: 2, name: "John Green", country: "United States" },
	];

	const books = [
		{ id: 1, title: "Noughts and Crosses", author_id: 1 },
		{ id: 2, title: "Checkmate", author_id: 1 },
		{ id: 3, title: "Boys Don't Cry", author_id: 1 },
		{ id: 4, title: "Knife Edge", author_id: 1 },
		{ id: 5, title: "Double Cross", author_id: 1 },
		{ id: 6, title: "The Fault in Our Stars", author_id: 2 },
		{ id: 7, title: "Looking for Alaska", author_id: 2 },
		{ id: 8, title: "Turtles All the Way Down", author_id: 2 },
		{ id: 9, title: "Paper Towns", author_id: 2 },
		{ id: 10, title: "An Abundance of Katherines", author_id: 2 },
	];

	await db.sync({ force: true });
	await Author.bulkCreate(authors);
	await Book.bulkCreate(books);
}

seed();
