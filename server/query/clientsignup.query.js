// import bcrypt from "bcryptjs";

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(req.body.password, salt);

const QUERY = {
  SELECT_CLIENTS: "SELECT * FROM clientsignup ORDER BY id DESC LIMIT 100",
  SELECT_CLIENT: "SELECT * FROM clientsignup WHERE id = ?",
  CHECK_CLIENT:
    "SELECT * FROM clientsignup WHERE first_name = ? OR last_name = ? OR email = ?",
  CHECK_CLIENT_BEFORE_LOGIN: "SELECT * FROM clientsignup WHERE email = ?",
  // CHECK_CLIENT_BEFORE_LOGIN: `SELECT clientsignup.*, roles.role_type FROM clientsignup JOIN roles ON clientsignup.role_id = role.id WHERE email = ?`,
  // CREATE_CLIENT:
  //   "INSERT INTO clientsignup(first_name, last_name, email, password) VALUES (?,?,?,?)",
  CREATE_CLIENT:
    "INSERT INTO clientsignup(first_name, last_name, email, password, role_id) VALUES (?,?,?,?, (SELECT id FROM roles WHERE role_type = 'client'))",

  //otp
  UPDATE_OTP: "UPDATE clientsignup SET otp = ? WHERE email = ?",
  RETRIEVE_OTP: "SELECT otp FROM clientsignup WHERE email = ?",
  UPDATE_CLIENT:
    "UPDATE clientsignup SET first_name = ?, last_name= ?, email= ?, password= ? WHERE id = ?",
  DELETE_CLIENT: "DELETE FROM clientsignup WHERE id = ?",
  UPDATE_EMAIL_VERIFIED:
    "UPDATE clientsignup SET email_verified = ? WHERE email = ?",
};

export default QUERY;
