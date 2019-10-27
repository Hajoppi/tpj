const db = require('../../services/db');
const utils = require('../../services/utils');
const Bcrypt = require('bcrypt');
const Boom = require('@hapi/boom');

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/api/login',
    handler: async (request, h) => {
      const payload = request.payload;
      try {
        const user = await db.getUser(payload.username);
        if (!user[0]) {
          return h.response('No user').code(401);
        }
        const isValid = await Bcrypt.compare(payload.password, user[0].password);
        if (isValid) {
          return { id_token: utils.createToken(user[0])};
        }
        else {
          return h.response('unauthenticated').code(401);
        }  
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/account',
    handler: async (request, h) => {
      try {
        return request.auth.credentials;
      } catch(error) {
        console.error(error);
        throw error;
      }
    }
  });
}