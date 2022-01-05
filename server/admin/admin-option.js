const AdminBro = require("admin-bro");
const AdminBroSequelize = require("@admin-bro/sequelize");
const User = require("../models/User");
const Rooms = require("../models/Rooms");
AdminBro.registerAdapter(AdminBroSequelize);
const options = {
  resources: [User, Rooms],
  branding: {
    companyName: "Hotel Management System Admin",
    softwareBrothers: false,
    logo: "",
  },
  dashboard: { component: AdminBro.bundle("./ds") },
  locale: {
    translations: {
      messages: {
        loginWelcome: "Administration Panel - Login", // the smaller text
      },
      labels: {
        loginWelcome: "Hotel Management System", // this could be your project name
      },
    },
  },
};

module.exports = options;
