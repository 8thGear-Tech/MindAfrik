import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO testonesignup (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/view", (req, res) => {
  db.query("SELECT * FROM testonesignup", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const userid = req.body.userid;
  const wage = req.body.wage;
  db.query(
    "UPDATE testonesignup SET wage = ? WHERE userid = ?",
    [wage, userid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:userid", (req, res) => {
  const userid = req.params.userid;
  db.query(
    "DELETE FROM testonesignup WHERE userid = ?",
    userid,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Connected");
});
