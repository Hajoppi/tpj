const db = require('../../services/db');
const config = require('../config');
const mail = require('../../services/mail');
const utils = require('../../services/utils');

function isOpen(invited) {
  const now = new Date();
  const invitedOpen = invited && now > config.signupStartInvited && now < config.signupEndInvited;
  const otherOpen = !invited && now > config.signupStart && now < config.signupEnd;
  return invitedOpen || otherOpen;
}

module.exports = async (server) => {
  server.route({
    method: 'POST',
    path: '/api/signup',
    handler: async (request, h) => {
      if (!isOpen(request.payload.invited)) {
        return h.response('Not time').code(401);
      }
      try {
        const signupObj = request.payload;
        const id = await db.signup(signupObj);
        const count = await db.getParticipantCount();
        if(count > config.maxParticipants) {
          mail.sendOnSignupCreateReserve(signupObj, id);
          db.addToReserve(id)
          return 1;
        }
        mail.sendOnSignupCreate(signupObj, id);
        return 1;
      }
      catch (error) {
        console.error(error);
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

  // Fetch admin signups
  server.route({
    method: 'GET',
    path: '/api/admin/signups',
    options: {
      auth: 'jwt'
    },
    handler: async (request, h) => {
      try {
        return await db.adminGetAllParticipants();
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  });

    // Fetch modifyLink
    server.route({
      method: 'GET',
      path: '/api/admin/modify/{id}',
      options: {
        auth: 'jwt'
      },
      handler: async (request, h) => {
        const params = request.params;
        if (!params) {
          return h.response('No id').code(404);
        }
        try {
          return { hash: utils.encrypt(String(params.id)) }
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
    });

  
  //Fetch single signup
  server.route({
    method: 'GET',
    path: '/api/signup',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'optional',
      },
    },
    handler: async (request, h) => {
      try {
        console.log(request.auth)
        if (!(request.auth.isAuthenticated || (isOpen(false) || isOpen(true)))) {
          return h.response('Not time').code(401);
        }
        const signupId = utils.decrypt(request.query.id);
        const signup = await db.getSignupDetails(signupId);
        signup.id = undefined;
        return signup;
      } catch(error) {
        console.error(error.stack)
        throw error;
      }
    }
  });
  
  //Update a signup
  server.route({
    method: 'PUT',
    path: '/api/signup',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'optional',
      },
    },
    handler: async (request, h) => {
      try {
        if (!(request.auth.isAuthenticated || (isOpen(false) || isOpen(true)))) {
          return h.response('Not time').code(401);
        }
        const signupId = utils.decrypt(request.payload.id);
        const signupObj = request.payload;
        const res = await db.updateSignup(signupId, signupObj);
        const count = await db.getSignupsBefore(signupId);
        if(count < config.maxParticipants) {
          mail.sendOnSignupUpdate(signupObj, signupId);
        }
        else {
          mail.sendOnSignupUpdateReserve(signupObj, signupId);
        }
        return res;
      } catch(error) {
        console.error(error.stack);
        throw error;
      }
    }
  });
  
  //Delete a signups
  server.route({
    method: 'DELETE',
    path: '/api/signup',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'optional',
      },
    },
    handler: async (request, h) => {
      try {
        if (!(request.auth.isAuthenticated || (isOpen(false) || isOpen(true)))) {
          return h.response('Not time').code(401);
        }
        const signupId = utils.decrypt(request.query.id);
        return await db.deleteSignup(signupId);
      } catch(error) {
        throw error;
      }
    }
  });
}
// Insert new signup
