'use strict';

const Hapi = require('hapi');
const db = require('./services/db');

const server = Hapi.server({
  port: process.env.PORT || 3001,
  host: 'localhost',
  routes: {
    cors: true
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// Insert new signup
server.route({
  method: 'POST',
  path: '/api/signup',
  handler: async (request, reply) => {
    try {
      const signupObj = request.payload;
      return await db.signup(signupObj);
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }
});

// Fetch the signups
server.route({
  method: 'GET',
  path: '/api/signups',
  handler: async (request, h) => {
    try {
      return await db.getAllParticipants();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
});

// Fetch normal guests
server.route({
  method: 'GET',
  path: '/api/signups/normal',
  handler: async (request, h) => {
    try {
      return await db.getNormalParticipants();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
});

// Fetch invited guests
server.route({
  method: 'GET',
  path: '/api/signups/invited',
  handler: async (request, h) => {
    try {
      return await db.getInvitedParticipants();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
});

init();
