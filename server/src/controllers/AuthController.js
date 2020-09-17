const { User } = require("../models");
const Token = require('../helpers/Token');
const bcrypt = require('bcryptjs');

module.exports = {

  /**
   *  POST /auth/login
   * @param {*} req 
   * @param {*} res 
   */
  async login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send('Usuário e/ou senha não informado(a)'); // Bad Request
    }

    let user = await User.findOne({
      where: { username }
    });

    if(user) {
      // validar a senha
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      console.log('Senha é válida: ', passwordIsValid);

      // se a senha for válida gere um token de acesso e retorne 
      if (passwordIsValid) {

        user = user.get({ plain: true });
        delete user.password;

        const token = Token.issue(user);
        return res.send({ token, user });
      } else {
        return res.status(401).send('Login inválido');
      }
    }
    
    // se senha inválida, retorne 403
    return res.status(403).send();
  },

  async register(req, res) {
    const user = req.body.user;

    try {
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password, salt);
      console.log('Senha criptografada: ', user.password);

      let createdUser = await User.create(user);
      createdUser = createdUser.get({ plain: true });
      delete createdUser.password;
      const token = Token.issue(createdUser);

      return res.send({
        user: createdUser,
        token
      });
    } catch (e) {
      console.log(e);
      return res.status(400).send('Não foi possível criar o usuário');
    }
  },
}