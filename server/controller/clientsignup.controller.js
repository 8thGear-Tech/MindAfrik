import db from "../config/mysql.config.js";
import Response from "../domain/response.js";
import log from "../util/logger.js";
import QUERY from "../query/clientsignup.query.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//email verification/token
import {
  sendVerificationEmail,
  generateToken,
  sendOtpEmail,
} from "../util/emailUtils.js";

dotenv.config({ path: "./configenv.env" });

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
      log.error(err.message);
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

    // Generate a JWT token
    const generateToken = (payload) => {
      try {
        const expiresIn = "1d"; // Token expires in 1 day
        const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
          expiresIn,
        });
        return token;
      } catch (error) {
        console.error("Error generating token:", error);
        throw error;
      }
    };
    //Create new user
    db.query(
      QUERY.CREATE_CLIENT,
      [req.body.first_name, req.body.last_name, req.body.email, hash, 1],
      // [req.body.first_name, req.body.last_name, req.body.email, hash, false],
      // [...Object.values(req.body), hash],
      (err, result) => {
        if (!result) {
          log.error(err.message);
          res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send(
            // new Response
            (HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            `Error Occured`)
          );
        } else {
          const client = {
            id: result.insertId,
            ...req.body,
            password: hash,
            role: "client",
            created_at: new Date(),
            email_verified: false,
          };

          // Generate JWT token
          const tokenPayload = { email: req.body.email, role: "client" };
          const verificationToken = generateToken(tokenPayload);

          // // Send email verification
          const verificationLink = `http://localhost:3005/clients/verify-email?token=${verificationToken}`;
          sendVerificationEmail(req.body.email, verificationLink);

          res
            .status(HttpStatus.CREATED.code)
            .send(
              new Response(
                HttpStatus.CREATED.code,
                HttpStatus.CREATED.status,
                `Client created`,
                { client, verificationToken }
              )
            );
        }
      }
    );
  });
};

export const verifyEmail = (req, res) => {
  const { token } = req.query;

  // Validate the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract the user's email from the token payload
    const email = decoded.payload.email;
    console.log("Decoded email:", email);

    // Update the user's email as verified in the database
    db.query(QUERY.UPDATE_EMAIL_VERIFIED, [1, email], (err, result) => {
      if (err) {
        console.error(err.message);
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
          .send(
            new Response(
              HttpStatus.INTERNAL_SERVER_ERROR.code,
              HttpStatus.INTERNAL_SERVER_ERROR.status,
              `Error Occurred`
            )
          );
      } else {
        console.log("Email verification successful!");
        res.redirect("http://localhost:3000/email-verified"); // Redirect to a success page or send a success response
      }
    });
  } catch (error) {
    // Token validation failed
    console.error("Token validation failed:", error);
    res.status(HttpStatus.BAD_REQUEST.code).send("Invalid token");
  }
};

//saveOtp to database
const saveOtpToDatabase = (email, otp) => {
  const values = [otp, email];

  db.query(QUERY.UPDATE_OTP, values, (error, results) => {
    if (error) {
      console.error("Failed to save OTP to the database:", error);
    } else {
      console.log("OTP saved to the database successfully");
    }
  });
};

// export const retrieveOtpFromDatabase = async (email) => {
//   try {
//     const values = [email];

//     const results = db.query(QUERY.RETRIEVE_OTP, values);

//     if (results.length === 0) {
//       console.error("No OTP found for the provided email");
//       throw new Error("No OTP found for the provided email");
//     }

//     const otp = results[0].otp;
//     return otp;
//   } catch (error) {
//     console.error("Failed to retrieve OTP from the database:", error);
//     throw error;
//   }
// };

//reset password
export const resetPassword = (req, res) => {
  const { email } = req.body;

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    // Save the OTP in the database
    saveOtpToDatabase(email, otp);

    // Send the OTP to the user's email
    sendOtpEmail(email, otp);

    res.status(HttpStatus.OK.code).send("Password reset OTP sent to email");
  } catch (error) {
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
      .send("Failed to reset password");
  }
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
        log.error(err.message);
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
      } else {
        if (!result[0].email_verified) {
          res.status(400).send("Email not verified");
        } else {
          //If there is no error, and user exists, check password

          const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            result[0].password
          );
          if (!isPasswordCorrect)
            res.status(400).send("Wrong email or password");

          const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
          const { password, ...other } = result[0];
          console.log(other);

          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ other, userRole: result[0].role_id });
        }
      }
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
  // res.redirect("/login");
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
            log.error(err.message);
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
