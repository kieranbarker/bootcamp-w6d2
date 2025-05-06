const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

class Book extends Model {}

Book.init(
	{
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		modelName: "book",
		timestamps: false,
		sequelize: db,
	}
);

module.exports = Book;
