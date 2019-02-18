'use strict';

const nodemailer = require('nodemailer'),
      utils = require('utils');


const mail = module.exports = {};

const smtp_host = process.env.SMTP_HOST,
    smtp_port = process.env.SMTP_PORT,
    smtp_user = process.env.SMTP_USER,
    smtp_pass = process.env.SMTP_PASS;

if (!smtp_host || !smtp_port || !smtp_user || !smtp_pass) {
    console.error('SMTP credentials are not defined!');
    return process.exit();
}
