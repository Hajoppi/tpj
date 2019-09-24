const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
  connectionLimit: 5
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
    ];
};

db.getSignupDetails = async (signupId) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query('SELECT * FROM signups WHERE id=$1', [signupId]);
    return result[0];
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

getInvitedParticipants = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query('SELECT * FROM signups WHERE invited=true');
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

getNormalParticipants = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query('SELECT * FROM signups WHERE invited=false');
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

db.getAllParticipants = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const normal = conn.query('SELECT name, table_group, created FROM signups WHERE invited=false');
    const invited = conn.query('SELECT name, table_group, created FROM signups WHERE invited=true');
    const r1 = await normal;
    const r2 = await invited;
    console.log(r2, r2.length);
    const rows = {
      normal: r1,
      invited: r2,
    }
    console.log(rows);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

db.signup = async (signupObj) => {
  let conn;
  try {
    console.log('here');
    conn = await pool.getConnection();
    const params = db.signupIntoParams(signupObj);
    const res = await conn.query('insert into signups (name, email, start_year, student, no_alcohol, sillis, invited, avec, food_requirements, table_group, representative_of, support, dish) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params);
    return res.insertId
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

db.deleteSignup = async (signup_id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query('delete from signups where id=$1', [signup_id]);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};

db.updateSignup = async (signupId, signupObj) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let params = db.signupIntoParams(signupObj);
    params.push(signupId);
    console.log(params);
    return await conn.query('update signups set name=?, email=?, start_year=?, student=?, no_alcohol=?, sillis=?, invited=?, avec=?, food_requirements=?, table_group=?, representative_of=?, support=?, dish=? where id=?', params);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
};
