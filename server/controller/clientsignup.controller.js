import db from "../config/mysql.config.js";
import Response from "../domain/response.js";
import log from "../util/logger.js";
import QUERY from "../query/clientsignup.query.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "CREATED" },
  NO_CONTENT: { code: 204, status: " NO_CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD_REQUEST" },
  NOT_FOUND: { code: 404, status: "NOT_FOUND" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL_SERVER_ERROR" },
};

export const getClients = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, fetching clients`);
  db.query(QUERY.SELECT_CLIENTS, (err, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `No client found`
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `Clients retrieved`,
            { clients: results }
          )
        );
    }
  });
};
export const createClient = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, creating client`);
  //Checks existing user
  db.query(QUERY.CHECK_CLIENT, Object.values(req.body), (err, result) => {
    if (!result) {
      log.err(err.message);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `Error Occured`
          )
        );
    } else if (result.length) {
      res.status(409).send("User already exists");
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    //Create new user
    db.query(
      QUERY.CREATE_CLIENT,
      [req.body.first_name, req.body.last_name, req.body.email, hash],
      // [...Object.values(req.body), hash],
      (err, result) => {
        if (!result) {
          log.err(err.message);
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
            .send(
              new Response(
                HttpStatus.INTERNAL_SERVER_ERROR.code,
                HttpStatus.INTERNAL_SERVER_ERROR.status,
                `Error Occured`
              )
            );
        } else {
          const client = {
            id: result.insertId,
            ...req.body,
            password: hash,
            created_at: new Date(),
          };
          res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                HttpStatus.CREATED.code,
                HttpStatus.CREATED.status,
                `Client created`,
                { client }
              )
            );
        }
      }
    );
  });
  // db.query(QUERY.CREATE_CLIENT, Object.values(req.body), (err, result) => {
  //   if (!result) {
  //     log.err(err.message);
  //     res
  //       .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
  //       .send(
  //         new Response(
  //           HttpStatus.INTERNAL_SERVER_ERROR.code,
  //           HttpStatus.INTERNAL_SERVER_ERROR.status,
  //           `Error Occured`
  //         )
  //       );
  //   }
  //   //Checks existing user
  //   else if (result.length) {
  //     res.status(409).json("User already exists");
  //   } else {
  //     const client = {
  //       id: result.insertId,
  //       ...req.body,
  //       created_at: new Date(),
  //     };
  //     res
  //       .status(HttpStatus.CREATED.code)
  //       .send(
  //         new Response(
  //           HttpStatus.CREATED.code,
  //           HttpStatus.CREATED.status,
  //           `Client created`,
  //           { client }
  //         )
  //       );
  //   }
  //   // Hash password
  //   const salt = bcrypt.genSaltSync(10);
  //   const hash = bcrypt.hashSync(req.body.password, salt);
  // });
  // // });
};
export const loginClient = (req, res) => {
  // log.info(`${req.method} ${req.originalurl}, creating client`);
  //Checks existing user
  db.query(
    QUERY.CHECK_CLIENT_BEFORE_LOGIN,
    [req.body.email],
    // Object.values(req.body),
    (err, result) => {
      if (!result) {
        log.err(err.message);
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
          .send(
            new Response(
              HttpStatus.INTERNAL_SERVER_ERROR.code,
              HttpStatus.INTERNAL_SERVER_ERROR.status,
              `Error Occured`
            )
          );
      } else if (result.length === 0) {
        res.status(404).send("User not found");
      }
      //If there is no error, and user exists, check password

      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        result[0].password
      );

      if (!isPasswordCorrect) res.status(400).send("Wrong email or password");

      const token = jwt.sign({ id: result[0].id }, "jwtkey");
      const { password, ...other } = result[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);

      //  else if (result.length === 0) {
      //   res.status(409).send("User already exists");
      // }

      // db.query(QUERY.CREATE_CLIENT, Object.values(req.body), (err, result) => {
      //   if (!result) {
      //     log.err(err.message);
      //     res
      //       .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      //       .send(
      //         new Response(
      //           HttpStatus.INTERNAL_SERVER_ERROR.code,
      //           HttpStatus.INTERNAL_SERVER_ERROR.status,
      //           `Error Occured`
      //         )
      //       );
      //   } else {
      //     const client = {
      //       id: result.insertId,
      //       ...req.body,
      //       created_at: new Date(),
      //     };
      //     res
      //       .status(HttpStatus.CREATED.code)
      //       .send(
      //         new Response(
      //           HttpStatus.CREATED.code,
      //           HttpStatus.CREATED.status,
      //           `Client created`,
      //           { client }
      //         )
      //       );
      //   }
      // });
    }
  );
};
export const logoutClient = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");

  // db.query(QUERY.CREATE_CLIENT, Object.values(req.body), (err, result) => {
  //   if (!result) {
  //     log.err(err.message);
  //     res
  //       .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
  //       .send(
  //         new Response(
  //           HttpStatus.INTERNAL_SERVER_ERROR.code,
  //           HttpStatus.INTERNAL_SERVER_ERROR.status,
  //           `Error Occured`
  //         )
  //       );
  //   } else {
  //     const client = {
  //       id: result.insertId,
  //       ...req.body,
  //       created_at: new Date(),
  //     };
  //     res
  //       .status(HttpStatus.CREATED.code)
  //       .send(
  //         new Response(
  //           HttpStatus.CREATED.code,
  //           HttpStatus.CREATED.status,
  //           `Client created`,
  //           { client }
  //         )
  //       );
  //   }

  // });
};

export const getClient = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, fetching client`);
  db.query(QUERY.SELECT_CLIENT, [req.params.id], (err, result) => {
    if (!result[0]) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            `Client by Id ${req.params.id} was not found`
          )
        );
    } else {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `Client retrieved`,
            result[0]
          )
        );
    }
  });
};
export const updateClient = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, fetching client`);
  db.query(QUERY.SELECT_CLIENT, [req.params.id], (err, result) => {
    if (!result[0]) {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            `Client by Id ${req.params.id} was not found`
          )
        );
    } else {
      log.info(`${req.method} ${req.originalurl}, updating client`);
      db.query(
        QUERY.UPDATE_CLIENT,
        [...Object.values(req.body), req.params.id],
        (err, result) => {
          if (!err) {
            res
              .status(HttpStatus.OK.code)
              .send(
                new Response(
                  HttpStatus.OK.code,
                  HttpStatus.OK.status,
                  `Client updated`,
                  { id: req.params.id, ...req.body }
                )
              );
          } else {
            log.err(err.message);
            res
              .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
              .send(
                new Response(
                  HttpStatus.INTERNAL_SERVER_ERROR.code,
                  HttpStatus.INTERNAL_SERVER_ERROR.status,
                  `Error occured`
                )
              );
          }
        }
      );
    }
  });
};
export const deleteClient = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, deleting client`);
  db.query(QUERY.DELETE_CLIENT, [req.params.id], (err, result) => {
    if (result.affectedRows > 0) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            `Client deleted`,
            result[0]
          )
        );
    } else {
      res
        .status(HttpStatus.NOT_FOUND.code)
        .send(
          new Response(
            HttpStatus.NOT_FOUND.code,
            HttpStatus.NOT_FOUND.status,
            `Client by Id ${req.params.id} was not found`
          )
        );
    }
  });
};

export default HttpStatus;
