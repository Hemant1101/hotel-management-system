const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./server/router/user-router");
const sequelize = require("./server/db/conn");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBro = require("admin-bro");
const options = require("./server/admin/admin-option");
const admin = new AdminBro(options);

const adminLogin = {
  email: "root@admin.com",
  password: "toor123",
};
const router = AdminBroExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    if (adminLogin.password === password && adminLogin.email === email) {
      return adminLogin;
    }
    return null;
  },
  cookieName: "user",
  cookiePassword: "some-secret-password-used-to-secure-cookie",
});

const corsOptions = {
  origin: true,
  credential: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "hemant1101",
//   database: "hotelmanagementsystem",
// });

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Server running at 5000 port",
    url: "http://localhost:5000",
  });
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use("/", userRoute);
app.use(admin.options.rootPath, router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// app.post("/register", (req, res) => {
//   try {
//     const { name, email, password, phonenumber } = req.body;
//     db.query(
//       "INSERT INTO users (name, email, password ,phonenumber) VALUES (?,?,?,?)",
//       [name, email, password, phonenumber],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return res
//             .status(400)
//             .json({ status: 400, message: "Something went wrong" });
//         } else {
//           return res
//             .status(200)
//             .json({ status: 200, message: "Registration successfull" });
//         }
//       }
//     );
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ staus: 500, message: "Internal server problem" });
//   }
// });

// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE email = ? AND password = ?",
//     [email, password],
//     (err, result) => {
//       console.log("login used");
//       if (err) {
//         res.send({ err: err });
//         console.log(err);
//       } else {
//         if (result.length > 0) {
//           console.log(result);
//           res.send(result);
//         } else {
//           console.log("message");
//           res.send({ message: "Wrong email/password" });
//         }
//       }
//     }
//   );
// });

// app.get("/api/rooms", (req, res) => {
//   try {
//     db.query("SELECT * FROM roomlist", (err, result) => {
//       console.log(result[0]["id"]);
//       res.status(200);
//       return res.status(200).json({ staus: 200, message: result });
//     });
//   } catch (error) {
//     return res.status(500).json({
//       staus: 500,
//       message: [
//         {
//           id: 1,
//           type: "server error",
//           price: "####",
//           totalrooms: 0,
//           availrooms: 0,
//           imgpath:
//             "https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg",
//         },
//       ],
//     });
//   }
// });
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
