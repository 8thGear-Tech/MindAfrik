// import { db } from "../db.js";
// import bcrypt from "bcryptjs";

// export const counselleesignup = (req, res) => {
//   db.query(
//     "INSERT INTO clientsignup (firstname, lastname, email, password) VALUES (?, ?, ?, ?);",
//     (firstname, lastname, email, password),
//     (err, result) => {
//       console.log(err);
//     }
//   );
// };

// export const counselleesignup = (req, res) => {
//Check existing User

//   const q = "SELECT * FROM clientsignup WHERE email = ?";

//   db.query(q, [req.body.email], (err, data) => {
//     if (err) return res.json(err);
//     if (data.length) return res.status(409).json("user already exist");

//     //Hash the password and create a user
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const q =
//       "INSERT INTO clientsignup(`firstname`, `lastname`, `email`, `password`, `confirmpassword` VALUES (?)";
//     const values = [
//       req.body.firstname,
//       req.body.lastname,
//       req.body.email,
//       hash,
//       // hash,
//     ];
//     db.query(q, { values }, (err, data) => {
//       if (err) return res.json(err);
//       return res.status(200).json("user has been created");
//     });
//   });
// };

export const login = (req, res) => {};
export const logout = (req, res) => {};
