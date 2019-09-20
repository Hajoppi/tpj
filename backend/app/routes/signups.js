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
        return await mail.sendOnSignupCreate(signupObj, id);
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
  
  //Fetch single signup
  server.route({
    method: 'GET',
    path: '/api/signup',
    handler: async (request, h) => {
      try {
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
  
  //Update a signups
  server.route({
    method: 'PUT',
    path: '/api/signup',
    handler: async (request, h) => {
      try {
        const signupId = utils.decrypt(request.payload.id);
        const signupObj = request.payload;
        const res = await db.updateSignup(signupId, signupObj);
        return res;
      } catch(error) {
        console.log(error.stack);
        throw error;
      }
    }
  });
  
  //Delete a signups
  server.route({
    method: 'DELETE',
    path: '/api/signup',
    handler: async (request, h) => {
      try {
        const signupId = utils.decrypt(request.query.id);
        return await db.deleteSignup(signupId);
      } catch(error) {
        throw error;
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
}
// Insert new signup
