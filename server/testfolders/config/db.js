import mysql from "mysql2";

export const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mysqltoken#008",
  database: "blog_post",
});
