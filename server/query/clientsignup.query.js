// import bcrypt from "bcryptjs";

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(req.body.password, salt);

const QUERY = {
  SELECT_CLIENTS: "SELECT * FROM clientsignup ORDER BY id DESC LIMIT 100",
  SELECT_CLIENT: "SELECT * FROM clientsignup WHERE id = ?",
  CHECK_CLIENT:
    "SELECT * FROM clientsignup WHERE first_name = ? OR last_name = ? OR email = ?",
  CHECK_CLIENT_BEFORE_LOGIN: "SELECT * FROM clientsignup WHERE email = ?",
  CREATE_CLIENT:
    "INSERT INTO clientsignup(first_name, last_name, email, password) VALUES (?,?,?,?)",
  UPDATE_CLIENT:
    "UPDATE clientsignup SET first_name = ?, last_name= ?, email= ?, password= ? WHERE id = ?",
  DELETE_CLIENT: "DELETE FROM clientsignup WHERE id = ?",
};

export default QUERY;
