const { User } = require('../models');

module.exports = {
  /**
   * POST /users - recebe um json com dados de um Usuario e cria o Usuario
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  }
}