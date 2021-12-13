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

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phonenumber = req.body.phonenumber;
  // const phonenumber = req.body.phonenumber;

  db.query(
    "INSERT INTO users (name, email, password ,phonenumber) VALUES (?,?,?,?)",
    [name, email, password, phonenumber],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("hii");
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
