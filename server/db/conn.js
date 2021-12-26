const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hotelmanagementsystem", "root", "hemant1101", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  await sequelize.sync({ alter: true });
  // Code here
})();

module.exports = sequelize;
