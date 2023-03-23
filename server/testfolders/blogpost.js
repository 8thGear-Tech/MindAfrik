import express from "express";
import cors from "cors";
import { db } from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/api/create", (req, res) => {
  const user_name = req.body.username;
  const title = req.body.title;
  const post_text = req.body.text;

  // console.log(user_name + title + post_text);

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
    [title, post_text, user_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/api/like/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log("connected");
});
