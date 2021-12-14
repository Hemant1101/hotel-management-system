const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const corsOptions = {
  origin: true,
  credential: true,
};

app.use(cors(corsOptions));

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

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

app.get("/api/rooms", (req, res) => {
  try {
    db.query("SELECT * FROM roomlist", (err, result) => {
      console.log(result[0]["id"]);
      res.status(200);
      return res.status(200).json({ staus: 200, message: result });
    });
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
          imgpath:
            "https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg",
        },
      ],
    });
  }
});
