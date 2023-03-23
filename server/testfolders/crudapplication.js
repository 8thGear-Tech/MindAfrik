import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqltoken#008",
  database: "cruddatabase",
});

app.get("/api/get", (req, res) => {
  const sqlRead = "SELECT * FROM movie_reviews";

  db.query(sqlRead, (err, result) => {
    // console.log(result);
    // if (err) {
    //   console.log(err);
    // } else {
    res.send(result);
    // }
  });
});

app.post("/api/insert", (req, res) => {
  const movie_name = req.body.movie_name;
  const movie_review = req.body.movie_review;

  const sqlInsert =
    "INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?, ?)";
  db.query(sqlInsert, [movie_name, movie_review], (err, result) => {
    // console.log(result);
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/api/delete/:movie_name", (req, res) => {
  const name = req.params.movie_name;

  const sqlDelete = "DELETE FROM movie_reviews WHERE movie_name = ?";
  db.query(sqlDelete, name, (err, result) => {
    // console.log(result);
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Running");
});
