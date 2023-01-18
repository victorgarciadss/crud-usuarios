const Sequelize = require("sequelize");

const sequelize = require("../Database/connectDatabase");

const userModel = sequelize.define('tbUsers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        notNull: true,
    },
    password: {
        type: Sequelize.STRING,
        notNull: true,
    }

})



module.exports = userModel;