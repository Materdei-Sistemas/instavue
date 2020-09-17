const jwt = require('jsonwebtoken');
const secret = 'instavue-secret';

/**
 * Token
 *
 * @description :: JSON Webtoken Helper
 * @help        :: See https://github.com/auth0/node-jsonwebtoken
 */

 module.exports = {
   issue(payload, expiresIn = '1h') {
     return jwt.sign(payload, secret, { expiresIn });
   },

   verify(token, callback) {
     return jwt.verify(token, secret, {}, callback);
   },
 };