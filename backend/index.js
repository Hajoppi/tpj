'use strict';

const Hapi = require('hapi');
const db = require('./services/db');
const server = new Hapi.Server();
/*
server.connection({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});
*/
/*
const testobj = {
  name: "Tuomas",
  email: "tuomas.kontola@gmail.com",
  start_year: "2016",
  student: true,
  no_alcohol: true,
  sillis: true,
  invited: false
};
*/
db.signup(testobj).then(res => {
  console.log(res);

}).catch(e => {
  console.log("There was an error inserting data");
  console.error(e.stack);
});

db.getParticipants().then(res => {
  console.log(res);
  db.terminate();
}).catch(e => {
  console.error(e.stack);
});
