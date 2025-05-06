const path = require("node:path");
const { Sequelize } = require("sequelize");

const db = new Sequelize({
	dialect: "sqlite",
	logging: false,
	storage: path.join(__dirname, "library.db"),
});

module.exports = db;
