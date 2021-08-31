'use strict';

const NodeMailer = require('nodemailer'),
      utils = require('./utils'),
      strings = require('../strings'),
      db = require('./db');

const mail = module.exports = {};
const baseURL = process.env.BASE_URL || 'http://localhost:8080';

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

const smtp_user = process.env.SMTP_USER || '',
      smtp_pass = process.env.SMTP_PASS || '';

if (!smtp_user || !smtp_pass) {
  console.error('SMTP credentials are not defined!');
  process.exit();
}

let SMTP_settings = {
  service: 'gmail',
  auth: {
    user: smtp_user,
    pass: smtp_pass
  },
};

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  NodeMailer.createTestAccount().then((testAccount) => {
    SMTP_settings = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    };
  });
}
const testConnection = async () => {
  const transporter = NodeMailer.createTransport(SMTP_settings);
  try {
    await transporter.verify();
    transporter.close();
    console.log('Mailer started with', SMTP_settings.host, SMTP_settings.service );
    return true;
  } catch(error) {
    console.error("Mailer did not start", error);
    return false;
  }
}

setTimeout(() => testConnection(), 1000);

function createSignupMailText(signupObj, signupId, flag) {
  const signupHash = utils.encrypt(String(signupId));
  const link = `${baseURL}/edit?id=${signupHash}`;
  let text = '';
  if (flag === 'update') {
    text = strings[signupObj.locale].signupUpdate.prepend.concat(strings[signupObj.locale].signupCreate.paragraphs).join('\n\n');
  } else if (flag === 'reserve') {
    text = strings[signupObj.locale].signupCreateReserve.paragraphs.join('\n\n');
  } else if (flag === 'ur'){
    text = strings[signupObj.locale].signupUpdateReserve.prepend.concat(strings[signupObj.locale].signupCreateReserve.paragraphs).join('\n\n');
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
  const transporter = NodeMailer.createTransport(SMTP_settings);
  try {
    await transporter.verify()
  } catch(error) {
    console.error("Mailer did not start", error);
    return false;
  }
  const text = createSignupMailText(signupObj, signupId)
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreate.subject,
    text: text
  };
  try {
    const result = await transporter.sendMail(options);
    if(process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(result));
    }
    return 1;
  } catch (err) {
    console.error(err)
    db.insertMailError(signupId, signupObj.email)
  }
}


mail.sendOnSignupCreateReserve = async function (signupObj, signupId) {
  const transporter = NodeMailer.createTransport(SMTP_settings);
  try {
    const result = await transporter.verify();
    if(process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(result));
    }
  } catch(error) {
    console.error("Mailer did not start", error);
    return false;
  }
  const text = createSignupMailText(signupObj, signupId, 'reserve')
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreate.subject,
    text: text
  };
  try {
    const result = await transporter.sendMail(options);
    if(process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(result));
    }
    return 1;
  } catch(err) {
    console.error("Signup reserve",err)
    db.insertMailError(signupId, signupObj.email)
  }
}

mail.sendOnSignupUpdate = async function(signupObj, signupId) {
  const transporter = NodeMailer.createTransport(SMTP_settings);
  try {
    await transporter.verify()
  } catch(error) {
    console.error("Mailer did not start", error);
    return false;
  }
  const text = createSignupMailText(signupObj, signupId, 'update');
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreate.subject,
    text: text
  };
  try {
    const result = await transporter.sendMail(options);
    if(process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(result));
    }
    return 1;
  } catch(err) {
    console.error("Signup update",err)
  }
}

mail.sendOnSignupUpdateReserve = async function(signupObj, signupId) {
  const transporter = NodeMailer.createTransport(SMTP_settings);
  try {
    await transporter.verify()
  } catch(error) {
    console.error("Mailer did not start", error);
    return false;
  }
  const text = createSignupMailText(signupObj, signupId, 'ur');
  const options = {
    from: '"Teekkarius" <anni.parkkila@ayy.fi>',
    to: signupObj.email,
    subject: strings[signupObj.locale].signupCreateReserve.subject,
    text: text
  };
  try {
    const result = await transporter.sendMail(options);
    if(process.env.NODE_ENV !== 'production') {
      console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(result));
    }
    return 1;
  } catch(err) {
    console.error("Signup update reserve",err)
  }
}
