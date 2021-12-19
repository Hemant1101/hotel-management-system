const AdminBro = require("admin-bro");
// const AdminBroMongoose = require("admin-bro-mongoose");

// AdminBro.registerAdapter(AdminBroMongoose);

const AdminBroSequelize = require("admin-bro-sequelizejs");

AdminBro.registerAdapter(AdminBroSequelize);
const { request } = require("express");
const options = {
  branding: {
    companyName: "Hotel management System",
  },
  resources: [],
};

module.exports = options;
