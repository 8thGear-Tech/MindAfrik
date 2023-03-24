import express from "express";
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../controller/clientsignup.controller.js";

const clientsignupRoutes = express.Router();

clientsignupRoutes.route("/").get(getClients).post(createClient);

clientsignupRoutes
  .route("/:id")
  .get(getClient)
  .put(updateClient)
  .delete(deleteClient);

export default clientsignupRoutes;
