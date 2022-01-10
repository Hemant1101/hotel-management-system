const express = require("express");
const router = express.Router();
const multer = require("multer");
const UserController = require("../controller/user-controller");
router.post("/register", multer().none(), UserController.register);
router.post("/login", multer().none(), UserController.login);
router.get("/api/rooms", multer().none(), UserController.getrooms);
router.get("/api/getuserdata", multer().none(), UserController.getuserdata);
router.get("/api/getroomdata", multer().none(), UserController.getroomdata);
router.post(
  "/api/updateroomdata",
  multer().none(),
  UserController.updateroomdata
);

module.exports = router;
