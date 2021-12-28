const User = require("../models/User");
const Rooms = require("../models/Rooms");

const register = async (req, res) => {
  try {
    const { name, email, password, phonenumber } = req.body;
    const user = await User.create({ name, email, password, phonenumber });
    await user.save();
    return res
      .status(200)
      .json({ status: 200, message: "Registration completed" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server problem" });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    if (!user) {
      return res.status(400).json({ status: 200, message: "Email not found" });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal server problem" });
  }
};
// ("/api/rooms",
const getrooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll();
    // db.query("SELECT * FROM roomlist", (err, result) => {});
    // console.log(rooms);
    res.status(200);
    return res.status(200).json({ rooms: rooms });
  } catch (error) {
    return res.status(500).json({
      staus: 500,
      message: [
        {
          id: 1,
          type: "server error",
          price: "####",
          totalrooms: 0,
          availrooms: 0,
          imgpath: "https://nomedia.com",
        },
      ],
    });
  }
};

const getuserdata = async (req, res) => {
  try {
    const usid = req.query.searchid;
    // console.log(req.query.searchid);
    const usersdata = await User.findOne({ where: { id: usid } });
    res.status(200);
    // console.log(usersdata);
    return res.status(200).json({ user: usersdata });
  } catch (error) {
    return res.status(500).json({ message: "userdata not found" });
  }
};

module.exports = { register, login, getrooms, getuserdata };
