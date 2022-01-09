const Sequelize = require("sequelize");

const sequelize = new Sequelize("avinash", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
