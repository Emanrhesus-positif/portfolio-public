
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: 'portfolio-contact@emanrhesus.fr',
    pass: process.env.WEB_PASS,
  },
});

const sendMail = async (mailOptions) => {
  try{
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;