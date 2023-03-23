import db from "../config/mysql.config.js";
import Response from "../domain/response.js";
import log from "../util/logger.js";
import QUERY from "../query/clientsignup.query.js";

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
  db.query(QUERY.SELECT_CLIENTS, (err, result) => {
    if (!result) {
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
            { clients: result }
          )
        );
    }
  });
};
export const createClient = (req, res) => {
  log.info(`${req.method} ${req.originalurl}, creating client`);
  db.query(QUERY.CREATE_CLIENT, Object.values(req.body), (err, result) => {
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
  });
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
export const UpdateClient = (req, res) => {
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
      db.query(QUERY.SELECT_CLIENT, [req.params.id], (err, result) => {
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
      });
    }
  });
};

export default HttpStatus;
