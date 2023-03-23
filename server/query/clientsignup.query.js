const QUERY = {
  SELECT_CLIENTS:
    "SELECT * FROM clientsignup ORDER BY created_at DESC LIMIT 100",
  SELECT_CLIENT: "SELECT * FROM clientsignup WHERE id = ?",
  CREATE_CLIENT:
    "INSERT INTO clientsignup(first_name, last_name, email, password) VALUES (?,?,?,?)",
  UPDATE_CLIENT:
    "UPDATE clientsignup SET first_name = ?, last_name= ?, email= ?, password= ? WHERE id = ?",
  DELETE_CLIENT: "DELETE FROM clientsignup WHERE id = ?",
};

export default QUERY;
