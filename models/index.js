const Author = require("./Author.js");
const Book = require("./Book.js");

Author.hasMany(Book, { foreignKey: "author_id" });
Book.belongsTo(Author, { foreignKey: "author_id" });

module.exports = {
	Author,
	Book,
};
