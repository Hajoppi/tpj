const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};
//Create db by
// su postgres
// createdb <dbname>
// psql
// grant all privileges on database <dbname> to <username> ;

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

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
        signupObj.representative_of || '',
        signupObj.gives_present === true ? true : false
    ];
};

db.getParticipants = async () => {
  const { rows } = await pool.query('SELECT * FROM signups');
  return rows;
}

db.signup = async (signupObj) => {
  const params = db.signupIntoParams(signupObj);
  const { rows } = await pool.query('insert into signups (name, email, start_year, student, no_alcohol, sillis, invited, avec, food_requirements, representative_of, gives_present) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id', params);
  return rows[0].id;
}


db.terminate = async () => {
  await pool.end();
}
