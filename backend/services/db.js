const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
  connectionLimit: 10
});

const db = module.exports = {};

db.signupIntoParams = (signupObj) => {
    return [
        signupObj.name,
        signupObj.email,
        signupObj.start_year,
        signupObj.student,
        signupObj.no_alcohol,
        signupObj.sillis,
        signupObj.invited,
        signupObj.avec || '',
        signupObj.food_requirements || '',
        signupObj.table_group || '',
        signupObj.representative_of || '',
        signupObj.support || false,
        signupObj.dish || '',
        signupObj.gdpr || false,
    ];
};

db.getSignupDetails = async (signupId) => {
  const result = await pool.query('SELECT * FROM signups WHERE id=?', [signupId]);
  return result[0];
}

db.getInvitedParticipants = async () => {
  return await pool.query('SELECT * FROM signups WHERE invited=true');
};

db.getNormalParticipants = async () => {
  return await pool.query('SELECT * FROM signups WHERE invited=false');
};

db.getAllParticipants = async () => {
  const normal = pool.query('SELECT name, table_group, created FROM signups WHERE invited=false');
  const invited = pool.query('SELECT name, table_group, created FROM signups WHERE invited=true');
  const r1 = await normal;
  const r2 = await invited;
  const rows = {
    normal: r1,
    invited: r2,
  }
  return rows;
};

db.signup = async (signupObj) => {
  const params = db.signupIntoParams(signupObj);
  const res = await pool.query('insert into signups (name, email, start_year, student, no_alcohol, sillis, invited, avec, food_requirements, table_group, representative_of, support, dish, gdpr) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params);
  return res.insertId
};

db.deleteSignup = async (signup_id) => {
  return await pool.query('delete from signups where id=?', [signup_id]);
};

db.updateSignup = async (signupId, signupObj) => {
  let params = db.signupIntoParams(signupObj);
  params.push(signupId);
  return await pool.query('update signups set name=?, email=?, start_year=?, student=?, no_alcohol=?, sillis=?, invited=?, avec=?, food_requirements=?, table_group=?, representative_of=?, support=?, dish=?, gdpr=? where id=?', params);
};
