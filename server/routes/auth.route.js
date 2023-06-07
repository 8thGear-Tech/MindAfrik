import express from "express";
import {
  getClients,
  getClient,
  createClient,
  loginClient,
  logoutClient,
  updateClient,
  deleteClient,
  verifyEmail,
  resetPassword,
} from "../controller/clientsignup.controller.js";

const clientsignupRoutes = express.Router();

clientsignupRoutes.post("/clientsignup", createClient);
clientsignupRoutes.get("/clientsignup", getClients);
clientsignupRoutes.get("/verify-email", verifyEmail);
clientsignupRoutes.get("/reset-password", resetPassword);
clientsignupRoutes.post("/clientlogin", loginClient);
clientsignupRoutes.post("/clientlogout", logoutClient);
// clientsignupRoutes.post("clientsignup", logoutClient);

// clientsignupRoutes.route("/").get(getClients).post(createClient);

// clientsignupRoutes
//   .route("/:id")
//   .get(getClient)
//   .put(updateClient)
//   .delete(deleteClient);

// clientsignupRoutes.route("/login").get(loggedinClient).post(loginClient);

export default clientsignupRoutes;
