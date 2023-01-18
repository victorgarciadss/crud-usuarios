require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbSecret = process.env.DB_SECRET;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbName, dbUser, dbSecret, {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;



