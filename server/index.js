import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import log from "./util/logger.js";
import HttpStatus from "./controller/clientsignup.controller.js";
import clientsignupRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const port = process.env.SERVER_PORT || 3005;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

app.use("/clients", clientsignupRoutes);

// app.get("/", (req, res) =>
//   res.send(
//     new Response(
//       HttpStatus.OK.code,
//       HttpStatus.OK.status,
//       "MindAfrik API, v1.0.0 - All systems good",
//       {
//         clientsignup: { name: "Opeyemi" },
//       }
//     )
//   )
// );
// app.all("*", (req, res) =>
//   res.status(HttpStatus.NOT_FOUND.code).send(
//     new Response(
//       HttpStatus.NOT_FOUND.code,
//       HttpStatus.NOT_FOUND.status,
//       "Route does not exist on the server",
//       {
//         clientsignup: { name: "Opeyemi" },
//       }
//     )
//   )
// );
// app.get("/", (req, res) =>
//   res.send(
//     new Response(200, "OK", "MindAfrik API, v1.0.0 - All systems go", {
//       clientsignup: { name: "Opeyemi" },
//     })
//   )
// );
// console.log(process.env);

app.listen(port, () => {
  log.info(`server running on ${ip.address()}:${port}`);
});

// app.listen(port, () => {
//   console.log(`server running on ${ip.address()}:${port}`);
// });
