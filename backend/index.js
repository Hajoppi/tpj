'use strict';

const Hapi = require('hapi');
const db = require('./services/db');
const jwtAuth = require('./services/auth');

const server = Hapi.server({
  port: process.env.PORT || 3001,
  host: 'localhost',
  address: process.env.NODE_URI || 'localhost',
  routes: {
    cors: true
  }
});


const auth = async (server) => {
  server.register(jwtAuth);
  server.auth.strategy('jwt', 'jwt');
};

const init = async () => {
  await auth(server);
  await require('./app/routes/users')(server);
  await require('./app/routes/signups')(server);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

server.route({
  method: 'POST',
  path: '/status',
  handler: (request, h) => {
      return {success: true};
  }
});

init();