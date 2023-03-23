import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import log from "./util/logger.js";
import HttpStatus from "./controller/clientsignup.controller.js";

dotenv.config();
const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) =>
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "MindAfrik API, v1.0.0 - All systems go",
      {
        clientsignup: { name: "Opeyemi" },
      }
    )
  )
);
// app.get("/", (req, res) =>
//   res.send(
//     new Response(200, "OK", "MindAfrik API, v1.0.0 - All systems go", {
//       clientsignup: { name: "Opeyemi" },
//     })
//   )
// );
console.log(process.env);

app.listen(port, () => {
  log.info(`server running on ${ip.address()}:${port}`);
});

// app.listen(port, () => {
//   console.log(`server running on ${ip.address()}:${port}`);
// });
