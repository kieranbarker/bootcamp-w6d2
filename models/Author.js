const { Model, DataTypes } = require("sequelize");
const db = require("../db.js");

class Author extends Model {}

Author.init(
	{
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		country: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		modelName: "author",
		timestamps: false,
		sequelize: db,
	}
);

module.exports = Author;
