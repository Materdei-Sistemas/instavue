const { Like } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/Likes - retorna todos os Likes que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const Likes = await Like.findAll();
      return res.send(Likes);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
  /**
   * GET /Likes/:id - retorna um Like com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },
  /**
   * Like /Likes - recebe um json com dados de um Like e cria o Like
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const Like = await Like.create(req.body);
      return res.status(201).send(Like);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },
  /**
   * PUT /Likes/:id - Atualiza um Like com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },
  /**
   * DELETE /Likes/:id - Remove um Like da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}