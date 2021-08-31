const PG = require('pg');

const pool = new PG.Pool();

pool.on('error', (error) => {
  console.error('Unexpected error on idle client', error)
  process.exit(-1)
});


const db = module.exports = {};

function mapAccepts(rows) {
  return rows.map((row) => {
    if(!row.accept) {
      row.name = '-'
      row.table_group = '-'
    }
    return row;
  });
}

db.signupIntoParams = (signupObj, update=false) => {
    const fields = [
        signupObj.name,
        signupObj.email,
        signupObj.start_year,
        signupObj.student,
        signupObj.no_alcohol,
        signupObj.sillis,
        signupObj.avec || '',
        signupObj.food_requirements || '',
        signupObj.table_group || '',
        signupObj.representative_of || '',
        signupObj.support || false,
        signupObj.dish || '',
        signupObj.gdpr || false,
        signupObj.accept || false,
    ];
    if(!update) fields.push(signupObj.invited);
    return fields;
};

db.getSignupDetails = async (signupId) => {
  const { rows } = await pool.query('SELECT * FROM signups WHERE id=$1', [signupId]);
  return rows[0];
}

db.getParticipantCount = async() => {
  const { rows } = await pool.query('SELECT COUNT(id) as count FROM signups');
  return rows[0].count;
};

db.getSignupsBefore = async (id) => {
  const { rows } = await pool.query('SELECT COUNT(id) as count from signups WHERE created<(SELECT created from signups where id=$1)',[id]);
  return rows[0].count;
}

db.adminGetAllParticipants = async () => {
  const normal = pool.query('SELECT * FROM signups WHERE invited=false ORDER BY created ASC');
  const invited = pool.query('SELECT * FROM signups WHERE invited=true ORDER BY created ASC');
  const r1 = await normal;
  const r2 = await invited;
  const rows = {
    normal: r1,
    invited: r2,
  }
  return rows;
};

db.getAllParticipants = async () => {
  const normal = pool.query('SELECT name, table_group, accept, created FROM signups WHERE invited=false');
  const invited = pool.query('SELECT name, table_group, accept, created FROM signups WHERE invited=true');
  const [r1, r2] = await Promise.all([normal, invited]);
  const rows = {
    normal: mapAccepts(r1.rows),
    invited: mapAccepts(r2.rows),
  }
  return rows;
};

db.signup = async (signupObj) => {
  const params = db.signupIntoParams(signupObj);
  const { rows } = await pool.query(`
    INSERT INTO signups (
      name,
      email,
      start_year,
      student,
      no_alcohol,
      sillis, 
      invited,
      avec,
      food_requirements,
      table_group,
      representative_of,
      support,
      dish,
      gdpr,
      accept
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      returning id`,
      params);
  return rows[0].id;
};

db.deleteSignup = async (signup_id) => {
  return await pool.query('delete from signups where id=$1', [signup_id]);
};

db.updateSignup = async (signupId, signupObj) => {
  let params = db.signupIntoParams(signupObj, update = true);
  params.push(signupId);
  return await pool.query(`
    UPDATE signups SET
      name=$1,
      email=$2,
      start_year=$3,
      student=$4,
      no_alcohol=$5,
      sillis=$6,
      avec=$7,
      food_requirements=$8,
      table_group=$9,
      representative_of=$10,
      support=$11,
      dish=$12,
      gdpr=$13,
      accept=$14
      WHERE id=$15
  `, params);
};

db.insertMailError = async (id, email) => {
  return await pool.query('insert into mail_errors (id, email) values ($1,$2)', [id, email]);
};

db.addToReserve = async (id) => {
  return await pool.query('insert into reserve_ids (id) values ($1)', [id])
};

db.getUser = async (username) => {
  const { rows } = await pool.query('SELECT id, password FROM users WHERE username=$1', [username]);
  return rows;
};

db.getUserById = async (id) => {
  const { rows } = await pool.query('SELECT id, username FROM users WHERE id=$1', [id]);
  return rows[0];
};