/**
 * isAuthenticated middleware
 * 
 * Token Format: 'Bearer jdsadh78387dnywdikd12w00dwldj384927r427fh42ef32$E%&VBT'
 */

const { User } = require('../models');
const Token = require('../helpers/Token');

module.exports = function (req, res, next) {
  let token;

  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if(parts.length === 2) {
      const [scheme, credentials] = parts;

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.status(400).send('Token inválido');
    } 
  } else {
    return res.status(400).send('Token inválido');
  }

  Token.verify(token, async (err, tokenUser) => {
    if(err) {
      res.status(401).send('Acesso inválido'); // 401 UNAUTHORIZED
    }
    
    try {
      const user = await User.findOne({
        where: {
          id: tokenUser.id
        },
      })

      if(!user) {
        res.status(401).send('Acesso inválido'); // 401 UNAUTHORIZED
      }

      req.user = user;
      return next(null, user);
    } catch(e) {
      next(e);
    }
  });
}