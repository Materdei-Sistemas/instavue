const { Post } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/posts - retorna todos os comentario que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const posts = await Post.findAll();
      return res.send(posts);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },
  /**
   * GET /posts/:id - retorna um comentario com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },
  /**
   * POST /posts - recebe um json com dados de um comentario e cria o post
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const post = await Post.create(req.body);
      return res.status(201).send(post);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },
  /**
   * PUT /posts/:id - Atualiza um comentario com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },
  /**
   * DELETE /posts/:id - Remove um comentario da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}