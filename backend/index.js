'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});
