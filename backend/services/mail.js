'use strict';

const nodemailer = require('nodemailer'),
      utils = require('./utils'),
      strings = require('../strings');

const mail = module.exports = {};
let transporter = null;

const smtp_host = process.env.SMTP_HOST,
  smtp_port = process.env.SMTP_PORT,
  smtp_user = process.env.SMTP_USER,
  smtp_pass = process.env.SMTP_PASS;

if (!smtp_host || !smtp_port) {
  console.error('SMTP credentials are not defined!');
  return process.exit();
}
const SMTP_settings = {
  host: smtp_host,
  port: smtp_port,
};
transporter = nodemailer.createTransport(SMTP_settings);
transporter.verify().then((success) => {
  console.log(success)
}).catch((err) => {
  console.log(err);
});

function signupToText(signupObj) {
  const booleans = strings[signupObj.locale].booleans;
  const details = strings[signupObj.locale].signupDetailsTemplate.join('\n')
  return details.format({
      name: signupObj.name,
      email: signupObj.email,
      start_year: signupObj.start_year,
      student: signupObj.student ? booleans[0] : booleans[1],
      avec: signupObj.avec,
      dish: signupObj.dish,
      food_requirements: signupObj.food_requirements,
      no_alcohol: signupObj.no_alcohol ? booleans[0] : booleans[1],
      table_group: signupObj.table_group,
      representative_of: signupObj.representative_of,
      sillis: signupObj.sillis ? booleans[0] : booleans[1],
      gives_present: signupObj.gives_present ? booleans[0] : booleans[1],
      support: signupObj.support ? booleans[0] : booleans[1]
  });
}
const settings = {
  price_student: 85,
  price_other: 110,
  price_support: 147,
  price_sillis: 20
}

function createSignupMailText(signupObj, signupId, update) {
  const signupHash = utils.encrypt(String(signupId));
  const link = 'https://teekkarius147.ayy.fi/#/edit?id=' + signupHash;
  let text = '';
  if (update === 'update') {
      text = strings[signupObj.locale].signupUpdate.prepend.concat(strings[signupObj.locale].signupCreate.paragraphs).join('\n\n');
  } else {
      text = strings[signupObj.locale].signupCreate.paragraphs.join('\n\n');
  }

  let signupPrice = signupObj.student ? settings.price_student : settings.price_other;
  if (signupObj.support) signupPrice = settings.price_support;
  if (signupObj.sillis) {
      signupPrice += settings.price_sillis;
  }

  return text.format({
      signupPrice: String(signupPrice),
      signupDetails: signupToText(signupObj),
      modifyLink: link
  });
}


mail.sendOnSignupCreate = async function (signupObj, signupId) {
  const text = createSignupMailText(signupObj, signupId)
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreate.subject,
    text: text
  };
  try {
    await transporter.sendMail(options);
    return 1;
  } catch(err) {
    console.error(err)
    throw err
  }
}

mail.sendOnSignupUpdate = async function(signupObj, signupId) {
  console.log(signupObj.locale)
  const text = createSignupMailText(signupObj, signupId, 'update');
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreate.subject,
    text: text
  };
  try {
    await transporter.sendMail(options);
    return 1;
  } catch(err) {
    console.error(err)
    throw err
  }
}
