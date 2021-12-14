const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "hemant1101",
  database: "hotelmanagementsystem",
});

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   const phonenumber = req.body.phonenumber;
//   // const phonenumber = req.body.phonenumber;

//   db.query(
//     "INSERT INTO users (name, email, password ,phonenumber) VALUES (?,?,?,?)",
//     [name, email, password, phonenumber],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         console.log("hii");
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});
app.post("/register", (req, res) => {
  try {
    const { name, email, password, phonenumber } = req.body;
    db.query(
      "INSERT INTO users (name, email, password ,phonenumber) VALUES (?,?,?,?)",
      [name, email, password, phonenumber],
      (err, result) => {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json({ status: 400, message: "Something went wrong" });
        } else {
          return res
            .status(200)
            .json({ status: 200, message: "Registration successfull" });
        }
      }
    );
  } catch (error) {
    return res
      .status(500)
      .json({ staus: 500, message: "Internal server problem" });
  }
});

// app.get("/api/rooms", (req, res) => {
//   db.query("SELECT * FROM roomlist", (err, result) => {
//     return result;
//   });
// });
