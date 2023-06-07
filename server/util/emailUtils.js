import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { google } from "googleapis";

// const OAuth2 = google.Auth.auth;

dotenv.config({ path: "./configenv.env" });

const oAuth2Client = new google.auth.OAuth2(
  // const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Create a transporter using OAuth2
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_ADDRESS,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

// const transporter = nodemailer.createTransport(mailerConfig);

// module.exports = mailerConfig;

// const createTransporter = async () => {
//   // try {
//   const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URL
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
//   });

//   const accessToken = oauth2Client.getAccessToken();

//   // const accessToken = await new Promise((resolve, reject) => {
//   //   oauth2Client.getAccessToken((err, token) => {
//   //     if (err) {
//   //       console.log("*ERR: ", err);
//   //       reject();
//   //     }
//   //     resolve(token);
//   //   });
//   // });

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.GMAIL_ADDRESS,
//       accessToken,
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN,
//     },
//   });
//   return transporter;
//   // } catch (err) {
//   //   return err;
//   // }
// };

// export const sendVerificationEmail = async (email, verificationLink) => {
//   try {
//     const mailOptions = {
//       from: process.env.USER_EMAIL,
//       to: email,
//       subject: "Test",
//       html: `<p>Please verify your email by clicking <a href="${verificationLink}">here</a>.</p>`,
//     };

//     const emailTransporter = createTransporter();
//     //     // let emailTransporter = await createTransporter();
//     //     await emailTransporter.sendMail(mailOptions);
//     //   } catch (err) {
//     //     console.log("ERROR: ", err);
//     //   }
//     // };
//     emailTransporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log("ERROR: ", err);
//       } else {
//         console.log("Email sent: ", info.response);
//       }
//     });
//   } catch (err) {
//     console.log("ERROR: ", err);
//   }
// };

// const transporter = nodemailer.createTransport({
//   //   service: "Gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, // Set to true for port 465 (SSL)
//   auth: {
//     user: process.env.GMAIL_ADDRESS,
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });

export const sendVerificationEmail = (email, verificationLink) => {
  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: email,
    subject: "Email Verification",
    html: `<p>Please verify your email by clicking <a href="${verificationLink}">here</a>.</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      // Handle email sending error
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
// export const sendVerificationEmail = (email, verificationLink) => {
//   const mailOptions = {
//     from: process.env.GMAIL_ADDRESS,
//     to: email,
//     subject: "Email Verification",
//     html: `<p>Please verify your email by clicking <a href="${verificationLink}">here</a>.</p>`,
//   };

//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.error(err);
//       // Handle email sending error
//     } else {
//       console.log("Email sent:", info.response);
//     }
//   });
// };

export const generateToken = (length) => {
  // Generate a random token/OTP of the specified length
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

// RESET PASSWORD

export const sendOtpEmail = (email, otp) => {
  // Create a transporter using your email service provider's SMTP configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Set to true for port 465 (SSL)
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Compose the email message
  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is: ${otp}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending OTP email:", error);
    } else {
      console.log("OTP email sent:", info.response);
    }
  });
};
