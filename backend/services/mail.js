'use strict';

const nodemailer = require('nodemailer'),
      utils = require('./utils');


const mail = module.exports = {};
let transporter = null;

const smtp_host = process.env.SMTP_HOST,
  smtp_port = process.env.SMTP_PORT,
  smtp_user = process.env.SMTP_USER,
  smtp_pass = process.env.SMTP_PASS;

if (!smtp_host || !smtp_port || !smtp_user || !smtp_pass) {
  console.error('SMTP credentials are not defined!');
  return process.exit();
}
const SMTP_settings = {
  host: smtp_host,
  port: smtp_port,
  /*auth: {
    user: smtp_user,
    pass: smtp_pass,
  }*/
};
console.log(SMTP_settings);

transporter = nodemailer.createTransport(SMTP_settings);
transporter.verify().then((success) => {
  console.log(success)
}).catch((err) => {
  console.log(err);
});

mail.sendOnSignupCreate = async function (signupObj, signupId) {
  const signupHash = utils.encrypt(String(signupId));
  const link = 'https://teekkarius147.ayy.fi/edit?id=' + signupHash;
  console.log(signupObj.email);
  const options = {
    from: '"Teekkarius" <tuomas.kontola@ayy.fi>',
    to: signupObj.email,
    subject: 'Subject',
    text: link
  };
  const info = await transporter.sendMail(options);
  console.log(info);
  return 1;
}
